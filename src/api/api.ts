export const taskAPI = {
    getTaskList(selectedDate: string) {
        // return (dispatch:any) => {
            const requestOptions: RequestInit = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            const url = 'https://81.90.181.175/api/tasks?date=' + selectedDate

            console.log('url: ', url)

            fetch(url, requestOptions)
                .then( response => {
                    return response.json()
                } )
                .then(data => {
                    console.log('response: ', data)
                    return data
                })
                .catch((e) => console.log("Can’t access  Error:.", e))
            
        // }
    },

    newTask(data: any) {
        // console.log('data in api',data)
        // postOptions.body = JSON.stringify(data)
        // console.log('postOptions',postOptions)
        // fetch(baseURL, postOptions)
        //     .then((response) => {
        //         console.log(response.json());
        //         return response.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //     })
    },
}
