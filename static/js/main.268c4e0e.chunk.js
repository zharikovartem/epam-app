(this["webpackJsonpepam-app"]=this["webpackJsonpepam-app"]||[]).push([[0],{185:function(e,t,a){},186:function(e,t,a){},332:function(e,t,a){"use strict";a.r(t);var s,n=a(8),r=a(0),c=a(24),l=a.n(c),i=(a(185),a(186),a(49)),o=a(44),u=a(338),d=a(43),j=a(30),m=a.n(j),b=a(342),f=a(340),O=a(177),h=a(343),S=a(130),p=a(335),v=a(336),k=a(54),D={labelCol:{span:8},wrapperCol:{span:16}},x={wrapperCol:{offset:8,span:16}},Y=b.a.TextArea,g=function(e){var t=f.a.useForm(),a=Object(o.a)(t,1)[0],s=Object(r.useState)(m()()),c=Object(o.a)(s,2),l=c[0],i=c[1],u=Object(r.useState)(e.taskSaveStatus),j=Object(o.a)(u,2),g=j[0],T=j[1];Object(r.useEffect)((function(){switch(e.taskSaveStatus){case"inProgress":T(e.taskSaveStatus);break;case"success":O.b.success("The task was successfully created"),e.onClose(),T(""),I();break;case"error":O.b.error("Error: "+e.errorMessage),T(e.taskSaveStatus)}}),[e.taskSaveStatus]);var I=function(){a.resetFields()};return Object(n.jsx)(h.a,{title:"Create New Task for "+l.format("DD MMM YYYY"),placement:"right",closable:!0,onClose:e.onClose,visible:e.visible,width:"80%",children:Object(n.jsxs)(f.a,Object(d.a)(Object(d.a)({},D),{},{form:a,name:"control-hooks",onFinish:function(t){var a={date:t.date.format("YYYY-MM-DD"),taskTime:t.taskTime.format("HH:mm"),taskName:t.taskName,user_id:1,description:t.description};m()(l.format("YYYY-MM-DD")).isBetween(e.dateInterval.startDate.format("YYYY-MM-DD"),e.dateInterval.endDate.format("YYYY-MM-DD"),void 0,"[]")?e.createNewTask(a,!0):e.createNewTask(a,!1)},children:[Object(n.jsx)(f.a.Item,{label:"Task name",name:"taskName",rules:[{required:!0,message:"Please input task name!"}],children:Object(n.jsx)(b.a,{})}),Object(n.jsx)(f.a.Item,{label:"Task date",name:"date",initialValue:l,rules:[{required:!0,message:"Please input task date!"}],children:Object(n.jsx)(S.a,{onChange:function(e,t){null!==e&&i(e)},format:"DD-MM-YYYY"})}),Object(n.jsx)(f.a.Item,{label:"Task time",name:"taskTime",rules:[{required:!0,message:"Please input task time!"}],children:Object(n.jsx)(p.a,{format:"HH:mm"})}),Object(n.jsx)(f.a.Item,{label:"Description",name:"description",children:Object(n.jsx)(Y,{rows:2})}),Object(n.jsx)(f.a.Item,Object(d.a)(Object(d.a)({},x),{},{children:"inProgress"===g?Object(n.jsx)(v.a,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(k.a,{type:"primary",htmlType:"submit",children:"Create"}),Object(n.jsx)(k.a,{className:"ml-3",type:"primary",onClick:I,children:"Reset"})]})}))]}))})},T=a(70),I=a.n(T),M=a(118),N=a(169),L=a.n(N).a.create({withCredentials:!0,baseURL:"https://crmapiserver.h1n.ru/api/"});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(s||(s={}));var y=function(e){return L.post("tasks",e).then((function(e){return 200===e.status?e:null})).catch((function(e){return e.response?e.response:(e.request?console.log("request",e.request):console.log("anything else: ",e),null)}))},E=function(e){return L.post("tasks/part",e).then((function(e){return 200===e.status?e:null})).catch((function(e){return e.response?e.response:(e.request?console.log("request",e.request):console.log("anything else: ",e),null)}))},w=function(e){return L.delete("tasks/".concat(e)).then((function(e){return 200===e.status?e:null})).catch((function(e){return e.response?e.response:(e.request?console.log("request",e.request):console.log("anything else: ",e),null)}))},_=function(e){return"date"===e?function(e,t){return e.date>t.date?1:-1}:function(e,t){return e.time>t.time?-1:1}},C={taskList:null,taskListIsFetching:!1,taskSaveStatus:"no",errorMessage:null,isInterval:!1,dateInterval:{startDate:m()(),endDate:m()()}},A={setTaskList:function(e){return{type:"SN/TASK/SET_TASK_LIST",taskList:e}},setTaskSaveStatus:function(e){return{type:"SN/TASK/SET_TASK_SAVE_STATUS",taskSaveStatus:e}},setErrorMessage:function(e){return{type:"SN/TASK/SET_ERROR_MESSAGE",message:e}},setTaskListIsFetching:function(e){return{type:"SN/TASK/SET_TASK_LIST_IS_FETCHING",isFetchingValue:e}},setIsInterval:function(e,t){return{type:"SN/TASK/SET_IS_INTERVAL",isInterval:e,date:t}}},F=function(e,t){return function(){var a=Object(M.a)(I.a.mark((function a(s,n){var r,c;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s(A.setTaskListIsFetching(!0)),r={start_date:e,end_date:t},a.next=4,E(r);case 4:null!==(c=a.sent)&&s(A.setTaskList(c.data)),s(A.setTaskListIsFetching(!1));case 7:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/TASK/SET_TASK_LIST":return Object(d.a)(Object(d.a)({},e),{},{taskList:t.taskList.Tasks.sort(_("time")).sort(_("date"))});case"SN/TASK/SET_TASK_SAVE_STATUS":return Object(d.a)(Object(d.a)({},e),{},{taskSaveStatus:t.taskSaveStatus});case"SN/TASK/SET_ERROR_MESSAGE":return Object(d.a)(Object(d.a)({},e),{},{errorMessage:t.message});case"SN/TASK/SET_TASK_LIST_IS_FETCHING":return Object(d.a)(Object(d.a)({},e),{},{taskListIsFetching:t.isFetchingValue});case"SN/TASK/SET_IS_INTERVAL":var a={startDate:t.date.startDate,endDate:t.date.endDate};return Object(d.a)(Object(d.a)({},e),{},{isInterval:t.isInterval,dateInterval:a});default:return e}},q=Object(i.b)((function(e){return{taskList:e.task.taskList,taskSaveStatus:e.task.taskSaveStatus,errorMessage:e.task.errorMessage,dateInterval:e.task.dateInterval}}),{createNewTask:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(){var a=Object(M.a)(I.a.mark((function a(s,n){var r,c,l,i;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s(A.setTaskSaveStatus("inProgress")),a.next=3,y(e);case 3:200===(r=a.sent).status?(t&&(c=n(),l=c.task.dateInterval.startDate.format("YYYY-MM-DD"),i=c.task.dateInterval.endDate.format("YYYY-MM-DD"),s(F(l,i))),s(A.setTaskSaveStatus("success")),s(A.setTaskSaveStatus("no"))):(s(A.setErrorMessage(r.data.message)),s(A.setTaskSaveStatus("error")),s(A.setTaskSaveStatus("no")),s(A.setErrorMessage(null)));case 5:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}})(g),V=a(344),R=a(345),P=a(346),z=S.a.RangePicker,H=function(e){var t=Object(r.useState)(!1),a=Object(o.a)(t,2),s=a[0],c=a[1],l=Object(r.useState)({startDate:m()(),endDate:m()()}),i=Object(o.a)(l,2),u=i[0],d=i[1];Object(r.useEffect)((function(){e.dateInterval.startDate.format("YYYY-MM-DD")===u.startDate.format("YYYY-MM-DD")&&e.dateInterval.endDate.format("YYYY-MM-DD")===u.endDate.format("YYYY-MM-DD")||e.setIsInterval(s,u)}),[s,u,e]);return Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-12 col-md-8 col-lg-6",children:[Object(n.jsx)("div",{className:"d-none d-sm-inline",children:Object(n.jsxs)("label",{children:["Select ",s?"date interval":"date",":"]})}),Object(n.jsx)("div",{className:"d-inline",children:s?Object(n.jsx)(z,{onChange:function(e,t){null!==e&&null!==e[0]&&null!==e[1]&&d({startDate:e[0],endDate:e[1]})},defaultValue:[e.dateInterval.startDate,e.dateInterval.endDate],value:[e.dateInterval.startDate,e.dateInterval.endDate],format:"DD-MM-YYYY",style:{marginLeft:10}}):Object(n.jsx)(S.a,{onChange:function(e,t){null!==e&&d({startDate:e,endDate:e})},defaultValue:e.dateInterval.startDate,format:"DD-MM-YYYY",style:{marginLeft:10}})})]}),Object(n.jsx)("div",{className:"col-12 col-md-4 col-lg-2 m-2 m-md-0",children:Object(n.jsx)(V.a,{className:"ml-3",onChange:function(e){e.target.checked||d({startDate:u.startDate,endDate:u.startDate}),c(e.target.checked)},children:"Date interval"})}),Object(n.jsxs)("div",{className:"col-12 col-md-12 col-lg-4",children:[Object(n.jsx)(k.a,{type:"primary",shape:"round",icon:Object(n.jsxs)("div",{className:"d-flex flex-wrap align-content-start",children:[Object(n.jsx)(R.a,{style:{fontSize:"18px"}}),Object(n.jsx)("span",{className:"ml-1",style:{fontSize:"14px"},children:"Add"})]}),style:{marginLeft:10},onClick:e.showDrawer}),Object(n.jsx)(k.a,{className:"",type:"primary",shape:"round",style:{marginLeft:10},onClick:e.showModal,icon:Object(n.jsxs)("div",{className:"d-flex flex-wrap align-content-start",children:[Object(n.jsx)(P.a,{style:{fontSize:"18px"}}),Object(n.jsx)("span",{className:"ml-1",style:{fontSize:"14px"},children:"Settings"})]})})]})]})},G=Object(i.b)((function(e){return{dateInterval:e.task.dateInterval}}),{setIsInterval:A.setIsInterval})(H),B=a(341),U=function(e){return Object(n.jsxs)(B.a,{title:"Task display settings",visible:e.isModalVisible,onOk:e.handleOk,onCancel:e.handleCancel,children:[Object(n.jsx)("p",{children:"Some contents..."}),Object(n.jsx)("p",{children:"Some contents..."}),Object(n.jsx)("p",{children:"Some contents..."})]})},J=a(337),Q=a(176),W=a(82),X=a(50),Z=a(339),$=a(347),ee=function(e){var t=Object(r.useState)(e.element.type),a=Object(o.a)(t,2),s=a[0],c=a[1],l=Object(r.useState)(!1),i=Object(o.a)(l,2),u=i[0],d=i[1];return Object(n.jsx)(Z.a.Item,{action:!0,className:"py-1",children:Object(n.jsxs)(W.a,{className:"px-0 ml-0 ml-sm-5",children:[Object(n.jsx)(X.a,{className:"mx-2",children:Object(n.jsx)(V.a,{onChange:function(e){e.target.checked?c("completed"):c("active")}})}),Object(n.jsx)(X.a,{className:"mx-2",children:e.element.time.split(":",2).join(":")}),Object(n.jsx)(X.a,{className:"mx-2",children:Object(n.jsx)(Q.a,{placement:"topLeft",title:e.element.descriptions,children:Object(n.jsx)("span",{style:{textDecoration:"completed"===s?"line-through":""},className:"text-break",children:e.element.name})},e.element.id)}),Object(n.jsx)(X.a,{className:"mr-auto ml-0 mr-sm-2 ml-sm-auto",children:u?Object(n.jsx)(v.a,{size:"small"},"spin"):Object(n.jsx)(k.a,{className:"",type:"primary",shape:"circle",size:"small",style:{marginLeft:10},onClick:function(){var t;t=e.element.id,d(!0),e.deleteTask(t,e.dateInterval.startDate.format("YYYY-MM-DD"),e.dateInterval.endDate.format("YYYY-MM-DD"))},icon:Object(n.jsx)("div",{className:"d-flex flex-wrap align-content-start",children:Object(n.jsx)($.a,{className:"ml-1",style:{fontSize:"14px"}})})})})]})})},te=Object(i.b)((function(e){return{dateInterval:e.task.dateInterval}}),{deleteTask:function(e,t,a){return function(){var s=Object(M.a)(I.a.mark((function s(n,r){return I.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,w(e);case 2:null!==s.sent&&(n(A.setErrorMessage("Task deletion was successful")),n(F(t,a)),n(A.setErrorMessage(null)));case 4:case"end":return s.stop()}}),s)})));return function(e,t){return s.apply(this,arguments)}}()},getTaskList:F})(ee),ae=function(e){var t=Object(r.useState)({startDate:m()(null),endDate:m()()}),a=Object(o.a)(t,2),s=a[0],c=a[1];return Object(r.useEffect)((function(){e.dateInterval.startDate.format("YYYY-MM-DD")===s.startDate.format("YYYY-MM-DD")&&e.dateInterval.endDate.format("YYYY-MM-DD")===s.endDate.format("YYYY-MM-DD")||null!==e.dateInterval.startDate&&null!==e.dateInterval.startDate&&(e.getTaskList(e.dateInterval.startDate.format("YYYY-MM-DD"),e.dateInterval.endDate.format("YYYY-MM-DD")),c(e.dateInterval))}),[e.dateInterval]),Object(r.useEffect)((function(){null!==e.errorMessage&&O.b.success(e.errorMessage)}),[e.errorMessage]),null!==e.taskList?Object(n.jsx)(n.Fragment,{children:se(e.taskList)}):Object(n.jsx)(v.a,{size:"large"},"spin")},se=function e(t){var a=[],s=[],r=function(e){return m()(e.date).format("DD MMMM")},c=null;null!==t&&t.length>0&&(c=r(t[0]),a.push(Object(n.jsxs)("h3",{children:[c,":"]},c+"title")));for(var l=0;l<24;l++){if(!(t.length>0)){a.push(Object(n.jsx)("h3",{children:"no tasks"}));break}if(a.push(Object(n.jsxs)(J.a,{orientation:"left",children:[l<=9?"0":null,l,":00"]},l+"to"+c)),null!==t)for(var i=0;i<t.length;i++){var o=t[i],u=Number(o.time.split(":",1));u>=l&&u<l+1&&(r(o)===c?a.push(Object(n.jsx)(Q.a,{placement:"topLeft",title:o.descriptions,children:Object(n.jsx)(te,{element:o})},l+"-"+o.id)):s.push(o))}}return s.length>0&&(a=a.concat(e(s))),a},ne=Object(i.b)((function(e){return{taskList:e.task.taskList,taskSaveStatus:e.task.taskSaveStatus,taskListIsFetching:e.task.taskListIsFetching,dateInterval:e.task.dateInterval,errorMessage:e.task.errorMessage}}),{getTaskList:F})(ae),re=function(e){var t=Object(r.useState)(!1),a=Object(o.a)(t,2),s=a[0],c=a[1],l=Object(r.useState)(!1),i=Object(o.a)(l,2),d=i[0],j=i[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"site-card-border-less-wrapper",children:[Object(n.jsxs)(u.a,{title:Object(n.jsx)(G,{showDrawer:function(){c(!0)},showModal:function(){j(!0)}}),bordered:!1,children:[Object(n.jsx)(U,{isModalVisible:d,handleOk:function(){j(!1)},handleCancel:function(){j(!1)}}),Object(n.jsx)(ne,{})]}),Object(n.jsx)(q,{onClose:function(){c(!1)},visible:s,setVisible:c})]})})},ce=Object(i.b)((function(e){return{taskList:e.task.taskList}}),{getTaskList:F})(re),le=(a(330),a(331),a(81)),ie=a(172),oe=Object(le.c)({task:K}),ue=Object(le.d)(oe,Object(le.a)(ie.a)),de=function(){return Object(n.jsx)(i.a,{store:ue,children:Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsx)(ce,{})})})},je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,348)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};l.a.render(Object(n.jsx)(de,{}),document.getElementById("root")),je()}},[[332,1,2]]]);
//# sourceMappingURL=main.268c4e0e.chunk.js.map