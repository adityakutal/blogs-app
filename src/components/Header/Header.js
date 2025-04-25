function Header(){
    return(
        <div className="flex flex-row justify-between bg-blue-900 p-5 text-white">
            <div className="text-3xl font-bold">Blogs</div> 
            <div>
                <label className="text-2xl font-bold mr-5">Login</label>
                <label className="text-2xl font-bold">Register</label>
            </div>
            </div>
    )
}
export default Header;