import { Link } from "react-router-dom";
import DashNav from "../components/DashNav";
import TopNav from "../components/TopNav";
import Backtotop from "../components/Backtotop";
import errorimage from '../assets/images/error-page.png'


function ModDashboard() {
  window.document.title = "Wink Moderator Dashboard";
  return (
    <>
      <DashNav />
      <TopNav />
      <main id="in" className="d-flex flex-column dashboard">
        <div className="pagetitle">
          <h1 className="m-0">Mod Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index.html">Home</Link>
              </li>
              <li className="breadcrumb-item active">Mod Dashboard</li>
            </ol>
          </nav>
        </div>
        <section className="dashboard">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card quicknums-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start"><h6>Filter</h6></li>
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Number of users</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people-fill"></i>
                        </div>
                        <div className="ps-3">
                          <h6>5.4K</h6>
                          <span className="text-success small pt-1 fw-bold">
                            15%
                          </span>
                          <span className="small pt-2 ps-1">
                            increase
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card quicknums-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start"><h6>Filter</h6></li>
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Number of tasks</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-clipboard2-check-fill"></i>
                        </div>
                        <div className="ps-3">
                          <h6>197K</h6>
                          <span className="text-danger small pt-1 fw-bold">2%</span>
                          <span className="small pt-2 ps-1">decrease</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card quicknums-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Revenue</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-currency-dollar"></i>
                        </div>
                        <div className="ps-3">
                          <h6>12.4M</h6>
                          <span className="text-success small pt-1 fw-bold">120%</span> <span className="small pt-2 ps-1">increase</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card" style={{minHeight:400}}>
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Engagement graph</h5>
                      A LINE GRAPH GOES HERE
                      <div id="reportsChart"></div>
                      {/* <script>
                        document.addEventListener("DOMContentLoaded", () => {
                          new ApexCharts(document.querySelector("#reportsChart"), {
                            series: [{
                              name: 'Sales',
                              data: [31, 40, 28, 51, 42, 82, 56],
                            }, {
                              name: 'Revenue',
                              data: [11, 32, 45, 32, 34, 52, 41]
                            }, {
                              name: 'Customers',
                              data: [15, 11, 32, 18, 9, 24, 11]
                            }],
                            chart: {
                              height: 350,
                              type: 'area',
                              toolbar: {
                                show: false
                              },
                            },
                            markers: {
                              size: 4
                            },
                            colors: ['#4154f1', '#2eca6a', '#ff771d'],
                            fill: {
                              type: "gradient",
                              gradient: {
                                shadeIntensity: 1,
                                opacityFrom: 0.3,
                                opacityTo: 0.4,
                                stops: [0, 90, 100]
                              }
                            },
                            dataLabels: {
                              enabled: false
                            },
                            stroke: {
                              curve: 'smooth',
                              width: 2
                            },
                            xaxis: {
                              type: 'datetime',
                              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                            },
                            tooltip: {
                              x: {
                                format: 'dd/MM/yy HH:mm'
                              },
                            }
                          }).render();
                        });
                      </script> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="card top-selling overflow-auto">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>
                    <div className="card-body pb-0">
                      <h5 className="card-title">Recent Tasks</h5>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Preview</th>
                            <th scope="col">Task</th>
                            <th scope="col">Price</th>
                            <th scope="col">Tasker</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"><a href="#"><img src={errorimage} alt="" /></a></th>
                            <td><a href="#" className="fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                            <td>$64</td>
                            <td>Person3</td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src={errorimage} alt="" /></a></th>
                            <td><a href="#" className="fw-bold">Exercitationem similique doloremque</a></td>
                            <td>$46</td>
                            <td>Person1</td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src={errorimage} alt="" /></a></th>
                            <td><a href="#" className="fw-bold">Doloribus nisi exercitationem</a></td>
                            <td>$59</td>
                            <td>Person1</td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src={errorimage} alt="" /></a></th>
                            <td><a href="#" className="fw-bold">Officiis quaerat sint rerum error</a></td>
                            <td>$32</td>
                            <td>Person1</td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src={errorimage} alt="" /></a></th>
                            <td><a href="#" className="fw-bold">Sit unde debitis delectus repellendus</a></td>
                            <td>$79</td>
                            <td>Person2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="card create-announcement">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      <a href="#">
                        <i className="bi-plus-circle-fill"></i>
                      </a>
                      <h4 className="text-center">Create Announcement</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="card reports d-flex flex-column justify-content-center">
                    <div className="card-body">
                      <h5 className="card-title">Reports</h5>
                      <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Reported Posts</th>
                              <th scope="col">Delete Post</th>
                              <th scope="col">Relieve Post</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><a href="#" className="fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                              <td>
                                <button className="btn btn-danger">
                                  <i className="bi-trash-fill"></i>
                                </button>
                              </td>
                              <td>
                                <button className="btn btn-success">
                                  <i className="bi-shield-check"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td><a href="#" className="fw-bold">Exercitationem similique doloremque</a></td>
                              <td>
                                <button className="btn btn-danger">
                                  <i className="bi-trash-fill"></i>
                                </button>
                              </td>
                              <td>
                                <button className="btn btn-success">
                                  <i className="bi-shield-check"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td><a href="#" className="fw-bold">Doloribus nisi exercitationem</a></td>
                              <td>
                                <button className="btn btn-danger">
                                  <i className="bi-trash-fill"></i>
                                </button>
                              </td>
                              <td>
                                <button className="btn btn-success">
                                  <i className="bi-shield-check"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td><a href="#" className="fw-bold">Officiis quaerat sint rerum error</a></td>
                              <td>
                                <button className="btn btn-danger">
                                  <i className="bi-trash-fill"></i>
                                </button>
                              </td>
                              <td>
                                <button className="btn btn-success">
                                  <i className="bi-shield-check"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td><a href="#" className="fw-bold">Sit unde debitis delectus repellendus</a></td>
                              <td>
                                <button className="btn btn-danger">
                                  <i className="bi-trash-fill"></i>
                                </button>
                              </td>
                              <td>
                                <button className="btn btn-success">
                                  <i className="bi-shield-check"></i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="card ban-users">
                    <div className="card-body">
                      <h5 className="card-title">Ban Users</h5>
                      <div className="ban-search">
                        <input className="w-100" type="search" name="search" id="" placeholder="Search" />
                      </div>
                      <div className="userstoban d-flex flex-column gap-1">
                        <div className="user-item d-flex align-items-center justify-content-between px-2 py-1">
                          <a href="">Person1 One</a>
                          <button className="btn btn-danger">
                            <i className="bi-person-fill-x"></i>
                          </button>
                        </div>

                        <div className="user-item d-flex align-items-center justify-content-between px-2 py-1">
                          <a href="">Lorem Person</a>
                          <button className="btn btn-danger">
                            <i className="bi-person-fill-x"></i>
                          </button>
                        </div>
                        <div className="user-item d-flex align-items-center justify-content-between px-2 py-1">
                          <a href="">Label Applet</a>
                          <button className="btn btn-danger">
                            <i className="bi-person-fill-x"></i>
                          </button>
                        </div>
                        <div className="user-item d-flex align-items-center justify-content-between px-2 py-1">
                          <a href="">Set Amet</a>
                          <button className="btn btn-danger">
                            <i className="bi-person-fill-x"></i>
                          </button>
                        </div>
                        <div className="user-item d-flex align-items-center justify-content-between px-2 py-1">
                          <a href="">Ipsum Dolor</a>
                          <button className="btn btn-danger">
                            <i className="bi-person-fill-x"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li><a className="dropdown-item" href="#">Today</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                    <li><a className="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Recent Activity <span>| Today</span></h5>
                  <div className="activity">
                    <div className="activity-item d-flex">
                      <div className="activite-label">32 min</div>
                      <i className='bi bi-circle-fill activity-badge align-self-start'></i>
                      <div className="activity-content">
                        Quia quae rerum <a href="#" className="fw-bold">explicabo officiis</a> beatae
                      </div>
                    </div>
                    <div className="activity-item d-flex">
                      <div className="activite-label">56 min</div>
                      <i className='bi bi-circle-fill activity-badge align-self-start'></i>
                      <div className="activity-content">
                        Voluptatem blanditiis blanditiis eveniet
                      </div>
                    </div>
                    <div className="activity-item d-flex">
                      <div className="activite-label">2 hrs</div>
                      <i className='bi bi-circle-fill activity-badge align-self-start'></i>
                      <div className="activity-content">
                        Voluptates corrupti molestias voluptatem
                      </div>
                    </div>
                    <div className="activity-item d-flex">
                      <div className="activite-label">1 day</div>
                      <i className='bi bi-circle-fill activity-badge align-self-start'></i>
                      <div className="activity-content">
                        Tempore autem saepe <a href="#" className="fw-bold">occaecati voluptatem</a> tempore
                      </div>
                    </div>
                    <div className="activity-item d-flex">
                      <div className="activite-label">2 days</div>
                      <i className='bi bi-circle-fill activity-badge align-self-start'></i>
                      <div className="activity-content">
                        Est sit eum reiciendis exercitationem
                      </div>
                    </div>
                    <div className="activity-item d-flex">
                      <div className="activite-label">4 weeks</div>
                      <i className='bi bi-circle-fill activity-badge align-self-start'></i>
                      <div className="activity-content">
                        Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li><a className="dropdown-item" href="#">Today</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                    <li><a className="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>
                <div className="card-body pb-0">
                  <h5 className="card-title">Traffic <span>| Today</span></h5>
                  A PIE CHART GOES HERE [TOP TASKS PERCENTAGE]
                  <div id="trafficChart" style={{minHeight:400}} className="echart"></div>
                  {/* <script>
                    document.addEventListener("DOMContentLoaded", () => {
                      echarts.init(document.querySelector("#trafficChart")).setOption({
                        tooltip: {
                          trigger: 'item'
                        },
                        legend: {
                          top: '5%',
                          left: 'center'
                        },
                        series: [{
                          name: 'Access From',
                          type: 'pie',
                          radius: ['40%', '70%'],
                          avoidLabelOverlap: false,
                          label: {
                            show: false,
                            position: 'center'
                          },
                          emphasis: {
                            label: {
                              show: true,
                              fontSize: '18',
                              fontWeight: 'bold'
                            }
                          },
                          labelLine: {
                            show: false
                          },
                          data: [{
                              value: 1048,
                              name: 'Search Engine'
                            },
                            {
                              value: 735,
                              name: 'Direct'
                            },
                            {
                              value: 580,
                              name: 'Email'
                            },
                            {
                              value: 484,
                              name: 'Union Ads'
                            },
                            {
                              value: 300,
                              name: 'Video Ads'
                            }
                          ]
                        }]
                      });
                    });
                  </script> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Backtotop />
    </>
  );
}

export default ModDashboard;
