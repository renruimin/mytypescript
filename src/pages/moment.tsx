import {useEffect} from "react";
import moment from 'moment';

const Moment = (): JSX.Element => {

    useEffect(() => {
        //moment() 返回类型为 Moment
        // console.log('moment',moment())
        // console.log('moment',moment().format('YYYY-MM-DD'))//format
        // console.log('moment',moment("20111031", "YYYYMMDD").fromNow())//format
        // console.log('dayStart',moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'));
        // console.log(moment().endOf('day').format('YYYY-MM-DD HH:mm:ss'));
        // console.log(moment().calendar());
        console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
        console.log(moment().add(7, 'days').subtract(2, 'months').year(2009).hours(0).minutes(0).seconds(0).format('YYYY-MM-DD HH:mm:ss'));
        getMonthBetween()
    }, [])

    /**
     * 获取两个日期中间的所有日期时间
     */
    const getMonthBetween = () => {
        const startDate = moment('2023-01-17');
        const endDate = moment('2023-03-08');
        const allYearMonth = []; // 接收所有年份和月份的数组
        while (endDate > startDate || startDate.format('YYYY-MM-DD') === endDate.format('YYYY-MM-DD')) {
            allYearMonth.push(startDate.format('YYYY-MM-DD'));
            startDate.add(1, 'day');
        }
        console.log('两个日期中间所有的日期------>', allYearMonth);
    }


    return (
        <div>11</div>
    )
}

export default Moment;
