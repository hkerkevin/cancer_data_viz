
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  UncontrolledAlert,
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

function Team() {
  const notificationAlert = React.useRef();
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Paper Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };
  return (
    <>
      <div className="content">
        <NotificationAlert ref={notificationAlert} />
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">About Us</CardTitle>
                <p>
                  Read our bios to learn more about the team members. We are students at {" "} 
                  <a
                    target="_blank"
                    href="https://viterbischool.usc.edu/"
                  >
                    USC Viterbi   
                  </a>
                  . We are in the {" "}
                  <a
                    href="https://viterbigradadmission.usc.edu/programs/masters/msprograms/data-science/ms-applied-data-science/"
                    target="_blank"
                  >
                    M.S. Applied Data Science program.
                  </a>
                </p>
              </CardHeader>
              <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/cancer-background.jpeg").default}
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="https://www.linkedin.com/in/carlincherry/" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="Carlin photo"
                      className="avatar border-gray"
                      src={require("assets/img/carlin.jpeg").default}
                    />
                    <h5 className="title">Carlin Cherry</h5>
                  </a>
                  <p className="description">ccherry@usc.edu</p>
                </div>
                <p className="text-center">
                  Job: Software Engineer <br />
                  Team: Lead Systems Engineer <br />
                  Favorite d3 Component: ToolTips
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">

                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/cancer-background.jpeg").default}
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="https://www.linkedin.com/in/hankeheunjohnson/" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="Hanke photo"
                      className="avatar border-gray"
                      src={require("assets/img/hanke.jpeg").default}
                    />
                    <h5 className="title">Hanke Heun-Johnson</h5>
                  </a>
                  <p className="description">heunjohn@usc.edu</p>
                </div>
                <p className="text-center">
                Job: Senior Quantitative Analyst<br />
                  Team:  Project Manager <br />
                  Favorite d3 Component: d3.Map
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/cancer-background.jpeg").default}
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="https://www.linkedin.com/in/hkerkevin/" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="Kevin photo"
                      className="avatar border-gray"
                      src={require("assets/img/kevin.jpeg").default}
                    />
                    <h5 className="title">Kevin Tsang</h5>
                  </a>
                  <p className="description">kktsang@usc.edu</p>
                </div>
                <p className="text-center">
                  Job: Data Analyst<br />
                  Team: Implementation Manager <br />
                  Favorite d3 Component: Interactive
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">

                </div>
              </CardFooter>
            </Card>
          </Col>
</Row>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Team;
