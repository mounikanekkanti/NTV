import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Screen = () => {
  return (
    <div className="screen">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="basemap" />
          <iframe class="map-image1" width='100%' height='400px' src="https://api.mapbox.com/styles/v1/imvknow123/cllap5jnu00r301pm7bl96q13.html?title=false&access_token=pk.eyJ1IjoiaW12a25vdzEyMyIsImEiOiJjbGw2bzhrOW4wMTBjM2trZDZkZnQwM3N0In0.zLRRTkP6mIwKvUUkgT6avg&zoomwheel=false#3.62/36.73/-99.28" title="Flat Map Light Mode" ></iframe>
          <div className="toolbar">
            <img className="img" alt="Layers" src="/img/layers.svg" />
            <img className="img" alt="Overlays" src="/img/overlays.svg" />
            <img className="img" alt="Draw" src="/img/Draw-d.svg" />
            <img className="img" alt="Point of interest" src="/img/Point of interest-d.svg" />
            <img className="img" alt="Grid" src="/img/Grid-d.svg" />
            <img className="img" alt="Element map" src="/img/3D Map-d.svg" />
            <Link to="/screen-1">
              <img className="color-mode" alt="Color mode" src="/img/color-mode.svg" />
            </Link>
          </div>
          <div className="map-zoom-coordinates">
            <img className="zoom" alt="Zoom" src="/img/zoom.svg" />
            <div className="longitude">
              <div className="text-wrapper">Lv 1</div>
            </div>
            <div className="latitude">
              <div className="text-wrapper">Latitude:</div>
              <div className="div">37.090240</div>
            </div>
            <div className="longitude-2">
              <div className="text-wrapper">Longitude:</div>
              <div className="div">-95.712891</div>
            </div>
          </div>
          <div className="group">
            <div className="frame">
              <div className="widget">
                <div className="graph">
                  <div className="info">
                    <div className="title">
                      <div className="name">Nationwide</div>
                    </div>
                    <div className="value">
                      <div className="amount">296,000</div>
                      <div className="indicator">
                        <img className="arrow-up" alt="Arrow up" src="/img/arrow-up.svg" />
                        <div className="percent">10%</div>
                      </div>
                    </div>
                    <p className="detail">Compared to 195,205 last year</p>
                  </div>
                  <div className="graph-2">
                    <div className="olumn">
                      <div className="overlap-group">
                        <div className="BG-chart" />
                        <div className="purple-chart" />
                        <div className="fervent-chart" />
                      </div>
                    </div>
                    <div className="olumn">
                      <div className="overlap-group">
                        <div className="BG-chart" />
                        <div className="purple-chart-2" />
                        <div className="fervent-chart-2" />
                      </div>
                    </div>
                    <div className="olumn">
                      <div className="overlap-group">
                        <div className="BG-chart" />
                        <div className="purple-chart-3" />
                        <div className="fervent-chart-3" />
                      </div>
                    </div>
                    <div className="olumn">
                      <div className="overlap-group">
                        <div className="BG-chart" />
                        <div className="purple-chart" />
                        <div className="fervent-chart-4" />
                      </div>
                    </div>
                    <div className="olumn">
                      <div className="overlap-group">
                        <div className="BG-chart" />
                        <div className="purple-chart-4" />
                        <div className="fervent-chart-5" />
                      </div>
                    </div>
                    <div className="olumn">
                      <div className="overlap-group">
                        <div className="BG-chart" />
                        <div className="purple-chart" />
                        <div className="fervent-chart-4" />
                      </div>
                    </div>
                    <div className="olumn">
                      <div className="overlap-group">
                        <div className="BG-chart" />
                        <div className="purple-chart-5" />
                        <div className="fervent-chart-6" />
                      </div>
                    </div>
                    <div className="olumn">
                      <div className="overlap-group">
                        <div className="BG-chart" />
                        <div className="purple-chart" />
                        <div className="fervent-chart" />
                      </div>
                    </div>
                    <div className="olumn">
                      <div className="overlap-group">
                        <div className="BG-chart" />
                        <div className="purple-chart-6" />
                        <div className="fervent-chart-7" />
                      </div>
                    </div>
                    <div className="olumn">
                      <div className="overlap-group">
                        <div className="BG-chart" />
                        <div className="purple-chart-7" />
                        <div className="fervent-chart-8" />
                      </div>
                    </div>
                    <div className="olumn">
                      <div className="overlap-group">
                        <div className="BG-chart" />
                        <div className="purple-chart-8" />
                        <div className="fervent-chart-9" />
                      </div>
                    </div>
                    <div className="olumn">
                      <div className="overlap-group">
                        <div className="BG-chart" />
                        <div className="purple-chart" />
                        <div className="fervent-chart" />
                      </div>
                    </div>
                    <div className="olumn">
                      <div className="overlap-group">
                        <div className="BG-chart" />
                        <div className="purple-chart-9" />
                        <div className="fervent-chart-10" />
                      </div>
                    </div>
                    <div className="olumn">
                      <div className="overlap-group">
                        <div className="BG-chart" />
                        <div className="purple-chart-10" />
                        <div className="fervent-chart-11" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table">
                  <div className="row">
                    <div className="icon-name">
                      <div className="name-2">San Francisco</div>
                    </div>
                    <div className="text-wrapper">33,051</div>
                  </div>
                  <div className="row">
                    <div className="icon-name">
                      <div className="name-2">Los Angeles</div>
                    </div>
                    <div className="text-wrapper">32,150</div>
                  </div>
                  <div className="row">
                    <div className="icon-name-2">
                      <div className="icon" />
                      <div className="name-2">New York City</div>
                    </div>
                    <div className="text-wrapper">28,692</div>
                  </div>
                  <div className="row">
                    <div className="icon-name-2">
                      <div className="icon" />
                      <div className="name-2">Atlanta</div>
                    </div>
                    <div className="text-wrapper">28,902</div>
                  </div>
                  <div className="row">
                    <div className="icon-name-2">
                      <div className="icon" />
                      <div className="name-2">Chicago</div>
                    </div>
                    <div className="text-wrapper">26,455</div>
                  </div>
                  <div className="row">
                    <div className="icon-name-2">
                      <div className="icon" />
                      <div className="name-2">Miami</div>
                    </div>
                    <div className="text-wrapper">25,292</div>
                  </div>
                  <div className="row">
                    <div className="icon-name-2">
                      <div className="icon" />
                      <div className="name-2">Detroit</div>
                    </div>
                    <div className="text-wrapper">25,161</div>
                  </div>
                  <div className="row">
                    <div className="icon-name-2">
                      <div className="icon" />
                      <div className="name-2">Austin</div>
                    </div>
                    <div className="text-wrapper">24,526</div>
                  </div>
                  <div className="row">
                    <div className="icon-name-2">
                      <div className="icon" />
                      <div className="name-2">Dallas</div>
                    </div>
                    <div className="text-wrapper">20,549</div>
                  </div>
                  <div className="row">
                    <div className="icon-name-2">
                      <div className="icon" />
                      <div className="name-2">Houston</div>
                    </div>
                    <div className="text-wrapper">19,059</div>
                  </div>
                </div>
              </div>
              <div className="table-2">
                <div className="name-3">By Region</div>
                <div className="row-2">
                  <div className="indicator-2" />
                  <div className="name-4">West</div>
                  <div className="text-wrapper">163,000</div>
                  <div className="text-wrapper">55%</div>
                </div>
                <img className="divider" alt="Divider" src="/img/divider.svg" />
                <div className="row-2">
                  <div className="indicator-3" />
                  <div className="name-4">Midwest</div>
                  <div className="text-wrapper">12,000</div>
                  <div className="text-wrapper">25%</div>
                </div>
                <img className="divider" alt="Divider" src="/img/divider.svg" />
                <div className="row-2">
                  <div className="indicator-4" />
                  <div className="name-4">Northeast</div>
                  <div className="text-wrapper">29,000</div>
                  <div className="text-wrapper">15%</div>
                </div>
                <img className="divider" alt="Divider" src="/img/divider.svg" />
                <div className="row-2">
                  <div className="indicator-5" />
                  <div className="name-4">Southeast</div>
                  <div className="text-wrapper">92,500</div>
                  <div className="text-wrapper">15%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="basemap-control-bar">
            <div className="controls">
              <div className="search-bar">
                <div className="search-bar-2">
                  <img className="img-2" alt="Search" src="/img/search.svg" />
                  <div className="text-wrapper-2">Keyword, ID, Site, Address</div>
                </div>
                <div className="selector">
                  <div className="nationwide">Search all</div>
                  <img className="img-2" alt="Chevron down" src="/img/chevron-down.svg" />
                </div>
              </div>
              <div className="button-component">
                <div className="button-group-base">
                  <img className="img-2" alt="Circle" src="/img/circle.svg" />
                  <div className="text">Wireless</div>
                </div>
                <div className="button-group-base">
                  <img className="img-2" alt="Circle" src="/img/circle.svg" />
                  <div className="text">Wireline</div>
                </div>
                <div className="button-group-base-2">
                  <img className="img-2" alt="Circle" src="/img/circle-2.svg" />
                  <div className="text-2">Discovery</div>
                </div>
                <div className="button-group-base">
                  <img className="img-2" alt="Circle" src="/img/circle.svg" />
                  <div className="text">ULH</div>
                </div>
              </div>
              <div className="filters">
                <div className="filters-2">
                  <div className="dropdown">
                    <div className="button">
                      <div className="button-base">
                        <div className="text-3">All Regions</div>
                        <img className="img-2" alt="Chevron down" src="/img/chevron-down-1.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="dropdown">
                    <div className="button">
                      <div className="button-base">
                        <div className="text-3">Utilization</div>
                        <img className="img-2" alt="Chevron down" src="/img/chevron-down-1.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="header">
            <div className="content-wrapper">
              <div className="content">
                <img className="icon-2" alt="Icon" src="/img/icon.svg" />
                <img className="vector" alt="Vector" src="/img/vector.svg" />
                <div className="text-wrapper-3">Network Topology Visualizer</div>
                <div className="user">
                  <div className="text-wrapper-4">Welcome back, Nash</div>
                  <img className="user-2" alt="User" src="/img/user.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};
