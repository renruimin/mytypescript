import {useEffect} from "react";
import moment from 'moment';

const Moment = (): JSX.Element => {

    useEffect(()=>{
        //moment() 返回类型为 Moment
        console.log('moment',moment())
        console.log('moment',moment().format('YYYY-MM-DD'))//format
        console.log('moment',moment("20111031", "YYYYMMDD").fromNow())//format
        console.log('dayStart',moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'));
        console.log(moment().endOf('day').format('YYYY-MM-DD HH:mm:ss'));
        console.log(moment().calendar());
    },[])

    return (
        <div>11</div>
    )
}

export default Moment;
