import styled from "styled-components";

import "./Dashboards.css"; 

const DashboardsStyled = styled.div`
`    

const Dashboards = () => {
    return <DashboardsStyled>
        <div className="container">
            <section className="dashboard">
                <iframe title="AUS_Manufacturing_2018-2021 - Total Values" width="800" height="486" 
                    src="https://app.powerbi.com/view?r=eyJrIjoiODM1ODU4ZmUtZmJmMy00ZGY3LWE0NGEtZDEwOGJiNjJiMmUxIiwidCI6IjgyZTU5MGM4LWY1NGEtNGM5NC04M2I3LTVkNzZlOGVlYzhkMSJ9" 
                    frameBorder="0" allowFullScreen={true}>
                </iframe>
            </section>
            <aside className="navigation"></aside>
            <section className="grid">
            <div className="card">
                <img src="/images/military-dashboard.png" alt="global military dashboard"/>
                <div className="card-info">
                    <a className="card-info-link" href="https://app.powerbi.com/view?r=eyJrIjoiYmExZDAyMmQtZGZkZC00MzE1LTliNWEtMjAwYWNkZjkzM2RhIiwidCI6IjgyZTU5MGM4LWY1NGEtNGM5NC04M2I3LTVkNzZlOGVlYzhkMSJ9" alt="Dashboard">Check Dashboard</a>
                </div>
            </div>
            <div className="card">
                <img src="/images/mining-dashboard.png" alt="mining dashboard"/>
                <div className="card-info">
                    <a className="card-info-link" href="https://app.powerbi.com/view?r=eyJrIjoiNTQwYjU3OTMtNDY3MS00OTI1LTk2Y2EtNWUwZGM3MTk5M2JlIiwidCI6IjgyZTU5MGM4LWY1NGEtNGM5NC04M2I3LTVkNzZlOGVlYzhkMSJ9" alt="active dashboard">Check Dashboard</a></div>
            </div>
            <div className="card">
                <img src="/images/australian-manufacturing-performance-2021.png" alt="manufacturing dashboard"/>
                <div className="card-info">
                    <a className="card-info-link" href="https://app.powerbi.com/view?r=eyJrIjoiODM1ODU4ZmUtZmJmMy00ZGY3LWE0NGEtZDEwOGJiNjJiMmUxIiwidCI6IjgyZTU5MGM4LWY1NGEtNGM5NC04M2I3LTVkNzZlOGVlYzhkMSJ9" alt="Dashboard">Check Dashboard</a>
                </div>
            </div>
        </section>
    </div>
    </DashboardsStyled>
}

export default Dashboards;