import React, {useEffect} from 'react'
import { Row,Col,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {bindActionCreators} from "redux"
//img
import topHeader from '../../../../assets/images/dashboard/top-header2.png'


// store
import {NavbarstyleAction, getDirMode, SchemeDirAction,  getNavbarStyleMode, getSidebarActiveMode, SidebarActiveStyleAction, getDarkMode, ModeAction,  SidebarColorAction, getSidebarColorMode, getSidebarTypeMode} from '../../../../store/setting/setting'
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return {
        darkMode: getDarkMode(state),
        schemeDirMode: getDirMode(state),
        sidebarcolorMode: getSidebarColorMode(state),
        sidebarTypeMode: getSidebarTypeMode(state),
        sidebaractivestyleMode: getSidebarActiveMode(state),
        navbarstylemode: getNavbarStyleMode(state),
    };
}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            ModeAction,
            SchemeDirAction,
            SidebarColorAction,
            SidebarActiveStyleAction,
            NavbarstyleAction,
        },
        dispatch
    )
})


const SubHeader = (props) => {

    useEffect(() => {
        // navbarstylemode
       const navbarstyleMode = sessionStorage.getItem('Navbarstyle-mode');
       props.NavbarstyleAction(navbarstyleMode);
 })
    return (
        <>
            <div className="iq-navbar-header" style={{height: "215px"}}>
                <Container fluid className=" iq-container">
                    <Row>
                        <Col md="12">
                            <div className="d-flex justify-content-between flex-wrap">
                                <div>
                                    <h1>Olá Dr. Marcelo Novaes</h1>
                                    <p>Bem vindo ao portal PrevLife</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* {{!-- rounded-bottom if not using animation --}} */}
                <div className="iq-header-img">
                    <img src={topHeader} alt="header" className="theme-color-default-img img-fluid w-100 h-100 animated-scaleX"/>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader)
