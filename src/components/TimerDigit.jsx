export default function TimerDigit({increment, duration, setDuration, mod, updateable}) {

    const changeDuration = (arg) => {
        if(arg == 0){
            if(duration-increment >= 0){
                setDuration((duration) => duration-increment);
            }
            else{
                setDuration(0);
            }
        }
        else if(arg == 1){
            if(duration+increment <= 3599){
                setDuration((duration) => duration+increment);
            }
            else{
                setDuration(3599);
            }
        }
    }

    return(
        <div>
            <div className="text-5xl">
                <button disabled={duration>=3599 || !updateable} className="p-4 border rounded-md hover:bg-slate-100 focus:ring-2 disabled:bg-slate-200 disabled:text-slate-700" onClick={() => changeDuration(1)}>&#8679;</button>
                <div className="p-4 border rounded-md">{(Math.floor(duration/increment))%mod}</div>
                <button disabled={duration<=0 || !updateable} className="p-4 border rounded-md hover:bg-slate-100 focus:ring-2 disabled:bg-slate-200 disabled:text-slate-700"onClick={() => changeDuration(0)}>&#8681;</button>
            </div>
        </div>
    )
};
