import { useEffect, useState } from "react";

export default function Clock(params) {

    const [ hour , setHour ] = useState(null);
    const [ minute , setMinute ] = useState(null);
    const [ second , setSecond ] = useState(null);

    useEffect(() => {
      setInterval(() => {
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
  
        setHour(h);
        setMinute(m);
        setSecond(s);
      }, 1000);
    });

    return (
        <div className="mt-10">
            {hour == null
                ? <div className="flex justify-center">loading</div>
                : <div><div className="flex flex-col items-center justify-center">
                    <div className="flex text-2xl">
                        <div className="flex">
                            {String(hour%12).padStart(2, '0')} : {String(minute).padStart(2, '0')} : {String(second).padStart(2, '0')}&nbsp;
                            {hour > 11 
                                ? <div>PM</div>
                                : <div>AM</div>
                            }
                        </div>

                    </div>
        
                    <div>
                        <svg width="200" height="200">
        
                            <circle cx="100" cy="100" r="90" 
                                stroke="black" 
                                strokeWidth="8"
                                fill="none"
                                // strokeDasharray={565.5}
                                // strokeDashoffset={30}
                                />
                            <line x1="100" y1="100" 
                                x2={100+Math.cos(((((hour%12)/12)*360)-90)*Math.PI/180)*40} 
                                y2={100+Math.sin(((((hour%12)/12)*360)-90)*Math.PI/180)*40} 
                                stroke="red"
                                strokeWidth="4"
                                />
                            <line x1="100" y1="100" 
                                x2={100+Math.cos((((minute/60)*360)-90)*Math.PI/180)*80} 
                                y2={100+Math.sin((((minute/60)*360)-90)*Math.PI/180)*80} 
                                stroke="blue"
                                strokeWidth="2"
                                />
                            <line x1="100" y1="100" 
                                x2={100+Math.cos((((second/60)*360)-90)*Math.PI/180)*60} 
                                y2={100+Math.sin((((second/60)*360)-90)*Math.PI/180)*60} 
                                stroke="black"
                                strokeWidth="2"
                                />
                            <circle cx="100" cy="100" r="2" 
                                stroke="black" 
                                strokeWidth="8"
                                fill="black"
                                // strokeDasharray={565.5}
                                // strokeDashoffset={30}
                                />
                        </svg>
                    </div>
                </div>
            </div>
            }
        </div>

        
        
    )
};
