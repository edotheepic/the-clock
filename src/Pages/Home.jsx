export default function Home(params) {
    
    return(
        <div className="p-10 text-8xl font-semibold font-mono tracking-widest text-slate-800">
            <div className="animate-appear opacity-0 py-2" style={{"--delay":"0.5s"}}>
                <div className="animate-float" style={{"--delay":"1.5s"}}>
                    Welcome
                </div>
            </div>
            <div className="animate-appear opacity-0 py-2" style={{ "--delay": "1s" }}>
                <div className="animate-float" style={{"--delay":"1.75s"}}>
                    To
                </div>
            </div>
            <div className="animate-appear opacity-0 py-2 uppercase" style={{ "--delay": "1.5s" }}>
                <div className="animate-float" style={{"--delay":"2s"}}>
                    The Clock
                </div>
            </div>
        </div>
    )
};
