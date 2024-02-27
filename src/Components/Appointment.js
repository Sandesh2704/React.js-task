import React, { useEffect, useState } from 'react';
import { MdStars } from "react-icons/md";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";


export default function Appointment() {
    const [appointments, setAppointments] = useState([]); 

    let apiUrl = 'https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json';

    const fetchAPI = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setAppointments(data.appointments);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAPI(apiUrl);
    }, []);

    return (
        <section className='px-7 py-4 border-2 rounded-2xl '>
            <h1 className='text-gray-600 font-medium text-xl mb-7'>Today's Appointment List</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-slate-100 ">
                        <tr >
                            <th scope="col" className="rounded-tl-lg px-6 py-3  text-sm text-left font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                            <th scope="col" className="text-left px-6 py-3  text-sm font-medium text-gray-500 uppercase tracking-wider">Appointment Date</th>
                            <th scope="col" className=" text-left px-6 py-3  text-sm font-medium text-gray-500 uppercase tracking-wider">Appointment Time</th>
                            <th scope="col" className="text-left px-6 py-3  text-sm font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                            <th scope="col" className=" text-left px-6 py-3  text-sm font-medium text-gray-500 uppercase tracking-wider">Injury</th>
                            <th scope="col" className="rounded-tr-lg px-6 py-3  text-left text-sm font-medium text-gray-500 uppercase tracking-wider text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {appointments.map((appointment, index) => (
                            <tr key={index}>

                                <td className="px-6 py-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <FaUserCircle className="mr-2 text-5xl text-gray-500 " /> 
                                        <div className="flex flex-col"> 
                                            <span className="mr-2">{appointment.patient_name}</span> 
                                            <span className='text-slate-400'>+{appointment.mobile_number}</span> 
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap"><div className="flex items-center text-slate-700"><LuCalendarDays className="mr-2 text-xl text-slate-500" />{appointment.appointment_date}</div></td>
                                <td className="px-6 py-2 whitespace-nowrap"><div className="flex items-center text-slate-700"><IoMdTime className="mr-1 text-xl text-slate-500" /> {appointment.appointment_time}</div>    </td>
                                <td className="px-6 py-2 whitespace-nowrap"> <div className="flex items-center text-slate-700"> <MdStars className="mr-1 text-2xl text-green-400" /> {appointment.doctor} </div>   </td>
                                <td className="px-6 py-2 whitespace-nowrap"> <div className='bg-cyan-300 rounded-xl py-1 px-5 w-max'>{appointment.injury}</div> </td>
                                <td className=" whitespace-nowrap  px-6 py-3 "> <div className="flex  justify-center items-center "> <IoEllipsisVerticalSharp className=" text-xl " /></div> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
