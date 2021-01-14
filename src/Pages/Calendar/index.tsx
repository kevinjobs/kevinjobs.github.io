import React from 'react';
import DesktopNavbar from '../Common/DesktopNavbar';
import './style.scss';

const Calendar: React.FC<any> = () => {
  const menus = [
    'home',
    'gallery',
    'calendar'
  ]

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }

  return(
    <div className="calendar">
      <DesktopNavbar menus={menus} />
      <div className="calendar-container">
        <table>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td>
              <h3>1</h3>
              <div className="inner no-scroll-bar" onWheel={handleWheel}>
                <div>todo1</div>
                <div>todo2</div>
                <div>todo3</div>
                <div>todo4</div>
                <div>todo5</div>
                <div>todo6</div>
                <div>todo7</div>
              </div>
            </td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>
              <h3>1</h3>
              <div className="inner no-scroll-bar" onWheel={handleWheel}>
                <div>todo1</div>
                <div>todo2</div>
                <div>todo3</div>
                <div>todo4</div>
                <div>todo5</div>
                <div>todo6</div>
                <div>todo7</div>
              </div>
            </td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr><tr>
            <td>
              <h3>1</h3>
              <div className="inner no-scroll-bar" onWheel={handleWheel}>
                <div>todo1</div>
                <div>todo2</div>
                <div>todo3</div>
                <div>todo4</div>
                <div>todo5</div>
                <div>todo6</div>
                <div>todo7</div>
              </div>
            </td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr><tr>
            <td>
              <h3>1</h3>
              <div className="inner no-scroll-bar" onWheel={handleWheel}>
                <div>todo1</div>
                <div>todo2</div>
                <div>todo3</div>
                <div>todo4</div>
                <div>todo5</div>
                <div>todo6</div>
                <div>todo7</div>
              </div>
            </td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr><tr>
            <td>
              <h3>1</h3>
              <div className="inner no-scroll-bar" onWheel={handleWheel}>
                <div>todo1</div>
                <div>todo2</div>
                <div>todo3</div>
                <div>todo4</div>
                <div>todo5</div>
                <div>todo6</div>
                <div>todo7</div>
              </div>
            </td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Calendar;