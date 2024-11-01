import { useEffect, useState } from "react"
import TimerDigit from "./TimerDigit";

export default function Timer(params) {
    
    const [duration, setDuration] = useState(0);

    const [intervalId, setIntervalId] = useState(null);

    const countdown = () => {
        if(intervalId == null && duration > 0){
            setIntervalId(setInterval(() => {
                setDuration((duration)=> duration-1);
            }, 1000));
        }
        else{
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }

    useEffect(() => {
        if(duration < 1 && intervalId!=null){
            clearInterval(intervalId);
            setIntervalId(null);
        }
    },[duration]);

    return(
        <div className="mt-10 flex flex-col items-center">
            <div className="flex">
                <TimerDigit
                    increment={600}
                    duration={duration}
                    setDuration={setDuration}
                    mod={6}
                    updateable={intervalId == null}
                    />
                <TimerDigit
                    increment={60}
                    duration={duration}
                    setDuration={setDuration}
                    mod={10}
                    updateable={intervalId == null}
                    />
                <div className="p-4 flex items-center text-5xl">
                    m
                </div>
                <div className="p-4 flex items-center text-5xl">
                    :
                </div>
                <TimerDigit
                    increment={10}
                    duration={duration}
                    setDuration={setDuration}
                    mod={6}
                    updateable={intervalId == null}
                    />
                <TimerDigit
                    increment={1}
                    duration={duration}
                    setDuration={setDuration}
                    mod={10}
                    updateable={intervalId == null}
                />
                <div className="p-4 flex items-center text-5xl">
                    s
                </div>
            </div>

            <div className="pt-10">
                <button onClick={countdown} disabled={duration<=0} className="p-4 text-6xl border rounded-lg hover:bg-slate-100 focus:ring-2 disabled:bg-slate-200 disabled:text-slate-700">
                    {intervalId
                        ?<div>STOP</div>
                        :<div>START</div>
                    }
                </button>
            </div>
        </div>
    )
};
