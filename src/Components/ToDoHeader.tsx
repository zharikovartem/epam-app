import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { DatePicker, Checkbox, Button } from 'antd'
import { FileAddOutlined, SettingOutlined } from '@ant-design/icons'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import {RangeValue, EventValue} from './../Types/types'
import { ToDoHeaderPropsType } from './ToDoHeaderContainer'
import moment from 'moment'

const { RangePicker } = DatePicker

export type OwnToDoHeaderPropsType = {
    onDateChange: (value: moment.Moment | null, dateString: string) => void,
    getTaskList: (date: string) => void,
    selectedDate: moment.Moment,
    setSelectedDate: React.Dispatch<React.SetStateAction<moment.Moment>>,
    showDrawer: () => void,
    isAddActive: boolean,
    onGapDateChange: (values: RangeValue<moment.Moment>, formatString: [string, string]) => void,
    showModal: () => void,
}

const ToDoHeader: React.FC<ToDoHeaderPropsType> = (props) => {
    const [isInterval, setIsInterval] = useState(false)
    const [dates, setDates] = useState<{startDate: moment.Moment, endDate: moment.Moment}>({startDate: moment(), endDate: moment()})

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect: ', isInterval)
        console.log(dates)
        props.setIsInterval(isInterval, dates)
    }, [isInterval, dates]);

    const onDateTypeChange = (e: CheckboxChangeEvent) => {
        setIsInterval(e.target.checked)
    }

    const onDateRangeChange = (values: RangeValue<moment.Moment>, formatString: [string, string]): void => {
        console.log(values)
        if (values !== null && values[0] !== null && values[1] !== null ) {
            setDates({
                startDate: values[0],
                endDate: values[1],
            })
        }
        
    }

    const onDateChange = (value: moment.Moment | null, dateString: string):void => {
        if (value !== null) {
            setDates({
                startDate: value,
                endDate: value,
            })
        }
    }

    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!', props)

    return (
        <div className="row" >
            <div className="col-12 col-md-8 col-lg-6">
                <div className="d-none d-sm-inline">
                    <label >Select {isInterval ? "date interval" : "date"}:</label>
                </div>

                <div className="d-inline">
                    {isInterval ?
                        <RangePicker
                            onChange={onDateRangeChange}
                            defaultValue={[props.selectedDate, props.selectedDate]}
                            format='DD-MM-YYYY'
                            style={{ marginLeft: 10 }}
                        />
                        :
                        <DatePicker
                            onChange={onDateChange}
                            defaultValue={props.selectedDate}
                            format='DD-MM-YYYY'
                            style={{ marginLeft: 10 }}
                        />
                    }
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2 m-2 m-md-0" >
                <Checkbox className="ml-3" onChange={onDateTypeChange}>Date interval</Checkbox>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
                <Button
                    type="primary"
                    shape="round"
                    icon={
                        <div className="d-flex flex-wrap align-content-start">
                            <FileAddOutlined style={{ fontSize: '18px' }} />
                            <span className="ml-1" style={{ fontSize: '14px' }}>Add</span>
                        </div>}
                    style={{ marginLeft: 10 }}
                    onClick={props.showDrawer}
                    disabled={props.isAddActive}
                />

                <Button className=""
                    type="primary"
                    shape="round"
                    style={{ marginLeft: 10 }}
                    onClick={props.showModal}
                    icon={
                        <div className="d-flex flex-wrap align-content-start">
                            <SettingOutlined style={{ fontSize: '18px' }} />
                            <span className="ml-1" style={{ fontSize: '14px' }}>Settings</span>
                        </div>} 
                    />
            </div>
        </div>
    )
}

export default ToDoHeader