function Homepage(){
    return(
        <div className="m-auto bg-zinc-300 h-screen"> 
            <div className="border-solid border m-auto pt-8 pl-3 pr-3 pb-8 w-[60%] border-black rounded-md shadow-xl bg-slate-200">
                <label className="text-3xl font-bold" >Blogs!</label>
                 <div className="text-1xl font-bold mt-4">Publish your passions, your way....</div>          
                 <hr className=" border-black mt-4"/>
                 <div className="flex justify-end">                 
                    <button className="bg-blue-900 text-white p-3 rounded-md mt-7 mr-4 w-[8%] font-bold">Login</button>
                    <button className="bg-blue-900 text-white p-3 rounded-md mt-7 w-[10%] font-bold">Register</button>
                    </div>
         </div>   
        </div>
    )
}
export default Homepage; 