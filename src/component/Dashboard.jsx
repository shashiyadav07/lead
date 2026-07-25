import { useEffect, useState } from "react";
import "../style/Dashboard.css";

function Dashboard() {

    const [leads, setLeads] = useState([]);

    useEffect(() => {

        const getLeads = async () => {

            const res = await fetch("https://server-backend-tan.vercel.app/adminHome", {
                credentials: "include"
            });

            const data = await res.json();

            setLeads(data);
        };

        getLeads();

    }, []);

    return (
        <div className="dashboard">

            <h1>Lead Dashboard</h1>

            <div className="table-container">

                <table>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Service</th>
                            <th>Budget</th>
                            <th>Description</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            leads.map((lead) => (
                                <tr key={lead._id}>

                                    <td>{lead.name}</td>
                                    <td>{lead.email}</td>
                                    <td>{lead.phone}</td>
                                    <td>{lead.service}</td>
                                    <td>${lead.budget}</td>
                                 <td> <div className="description-box">{lead.description} </div> </td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Dashboard;