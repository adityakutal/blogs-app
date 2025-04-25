function Register(){
    return(
        <div>
           <div className="m-auto bg-zinc-300 h-screen"> 
            <div className="border-solid border m-auto pt-8 pl-3 pr-3 pb-8 w-[30%] border-black rounded-md shadow-xl bg-slate-200">
                <label className="text-3xl font-bold" >Blogs!</label>
                 <div className="text-1xl font-bold mt-4">Publish your passions, your way....</div>          
                 <hr className=" border-black mt-4"/>                 
                   <div className="mt-4">
                    <label className="text-10xl">Register</label>
                    <div>Name</div>
                    <input type="text" placeholder="FirstName LastName"/>
                    <div>EmailId</div>
                    <input type="text" placeholder="test@gmail.com"/> 
                    <div>password</div>
                    <div><input type="text" placeholder="text123"/></div>  
                    <button className="">Register</button>
                    </div>
         </div>   
        </div>  
        </div>
    )
}
export default Register;