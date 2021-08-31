import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(false);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {//Cập nhật lại DOM
        //console.log('use effect ran');
    //     console.log(name);
    //  }, [name]);
        //Tạo ra một bộ điều khiển mới để yêu cầu tìm nạp cụ thể và sau đó khi chúng ta đã liên
        // kết nó với một lần tìm nạp, chúng ta có thể sử dụng bộ điều khiển hủy bỏ đó để dừng tìm và nạp
        const abortCont = new AbortController(); 
        
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal}) //{signal: abortCont.signal} -> thêm vào đối số để tìm nạp
                .then(res => {
                    //console.log(res);
                    if(!res.ok){
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json()
                })
                .then(data => {
                    //console.log(data); //Kiểm tra có lấy dược data từ server không
                    setData(data);
                    setIsPending(false); //Nếu để true thì Loading vẫn sẽ hiện -> phải để false
                    setError(false);
                })
                .catch(err => {
                    if(err.name === 'AbortError') {//Để dừng tìm nạp thì sẽ cập nhật trạng thái "fetch aborted" cho nó 
                        console.log('fetch aborted') 
                    }else{
                        setIsPending(false); 
                        setError(err.message); // Nếu lỗi load data thì hiển thị ra Could not fetch the data for that resource
                    }
                    
                } )
            }, 1000);
            return () =>  abortCont.abort(); //để dừng tìm nạp và chúng ta thực hiện điều đó bên trong hàm .catch(err => 
        }, [url]);
    return { data, isPending, error};
}
 
export default useFetch;