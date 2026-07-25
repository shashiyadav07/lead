import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const navigate = useNavigate()

    const [adminData, setAdminData] = useState({
        Boss: "",
        password: ""
    });

    const handleChange = (e) => {
        setAdminData({
            ...adminData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

           const res = await fetch("https://server-backend-tan.vercel.app/admin", {
    method: "POST",
    credentials: "include",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(adminData)
});

            
            const data = await res.json();
            if(data){
                alert(data.message);
        //    document.cookie = `token=${data.token}; path=/`;
            console.log(document.cookie);
            navigate('/dashboard')

            }

            
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className="admin-login">

            <div className="login-box">

                <h1>Admin Login</h1>

                <p>Login to access your dashboard.</p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="BossName"
                        name="Boss"
                        value={adminData.Boss}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={adminData.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </section>
    );
}

export default AdminLogin;