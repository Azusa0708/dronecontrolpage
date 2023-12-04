import React, { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  //解锁
  const [unlockresponseData, setunlockResponseData] = useState(null);
  const [unlockloading, setunlockLoading] = useState(false);
  //起飞
  const [takeoffresponseData, settakeoffResponseData] = useState(null);
  const [takeoffloading, settakeoffLoading] = useState(false);
  //着陆
  const [landingresponseData, setlandingResponseData] = useState(null);
  const [landingloading, setlandingLoading] = useState(false);
  //返航
  const [backresponseData, setbackResponseData] = useState(null);
  const [backloading, setbackLoading] = useState(false);
  //定点飞行
  const [movetopointresponseData, setmovetopointresponseData] = useState(null);
  const [movetopointloading, setmovetopointLoading] = useState(false);


  //定点飞行xyz坐标
  const [xpoint,setxpoint] = useState('');
  const [ypoint,setypoint] = useState('');
  const [zpoint,setzpoint] = useState('');
  
  
  const unlock = async () => {
    try {
      setunlockLoading(true);

      // 发送解锁请求
      const response = await axios.get('10.0.0.1/arm');

      // 更新解锁请求的响应数据
      setunlockResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setunlockLoading(false);
    }
  };

  const takeoff = async () => {
    try {
      settakeoffLoading(true);

      // 发送起飞请求
      const response = await axios.get('10.0.0.1/takeoff');

      // 更新起飞请求的响应数据
      settakeoffResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      settakeoffLoading(false);
    }
  };

  const landing = async () => {
    try{
      setlandingLoading(true);

      //发送着陆请求
      const response = await axios.get('');

      //更新着陆请求的响应数据
      setlandingResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setlandingLoading(false);
    }
  };

  const back = async () => {
    try{
      setbackLoading(true);

      //发送返航请求
      const response = await axios.get('');

      //更新返航请求的响应数据
      setbackResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setbackLoading(false);
    }
  };

  const movetopoint = async () => {
    try{
      setmovetopointLoading(true);

      //发送定点移动请求
      const response = await axios.get('');

      //更新定点移动请求的响应数据
      setmovetopointresponseData(response.data);
    } catch (error) {
      console.error('Error Fetching data:', error);
    } finally {
      setmovetopointLoading(false);
    }
  };

  return (
    <div>
      <h1>无人机控制</h1>
      
      {/* 解锁 */}
      <div>
        <div>
      <button onClick={unlock} disabled={unlockloading}>
        {unlockloading ? '解锁中...' : '解锁'}
      </button>
      </div>

      {/* 显示解锁请求的响应数据 */}
      <div>
      {unlockresponseData && (
        <div>
          <h2>解锁信息:</h2>
          <pre>{JSON.stringify(unlockresponseData, null, 2)}</pre>
        </div>
      )}
      </div>
      </div>

      {/* 起飞 */}
      <div>
        <div>
      <button onClick={takeoff} disabled={takeoffloading}>
        {takeoffloading ? '起飞中...' : '起飞'}
      </button>
      </div>

      {/* 显示起飞请求的响应数据 */}
      <div>
      {takeoffresponseData && (
        <div>
          <h2>起飞信息:</h2>
          <pre>{JSON.stringify(takeoffresponseData, null, 2)}</pre>
        </div>
      )}
      </div>
      </div>

      {/* 降落 */}
      <div>
        <div>
      <button onClick={landing} disabled={landingloading}>
        {landingloading ? '着陆中...' : '着陆'}
      </button>
      </div>

      {/* 显示着陆请求的响应数据 */}
      <div>
      {landingresponseData && (
        <div>
          <h2>着陆信息:</h2>
          <pre>{JSON.stringify(landingresponseData, null, 2)}</pre>
          </div>
      )}
      </div>
      </div>

      {/* 返航 */}
      <div>
        <div>
      <button onClick={back} disabled={backloading}>
        {backloading ? '返航中...' : '返航'}
      </button>
      </div>

      {/* 显示返航请求的响应数据 */}
      <div>
      {backresponseData && (
        <div>
          <h2>返航信息</h2>
          <pre>{JSON.stringify(backresponseData, null, 2)}</pre>
        </div>
      )}
      </div>
      </div>

      {/* 定点飞行 */}
      <div>
        <div>
          <button onClick={movetopoint} disabled={movetopointloading}>
            {movetopointloading ? '定点飞行中...' : '定点飞行'}
          </button>
        </div>

        <div>
          <input
          type='text'
          value={xpoint}
          onChange={(e) => setxpoint(e.target.value)}
          placeholder='目的x坐标'
          />
          <input
          type='text'
          value={ypoint}
          onChange={(e) => setypoint(e.target.value)}
          placeholder='目的y坐标'
          />
          <input
          type='text'
          value={zpoint}
          onChange={(e) => setzpoint(e.target.value)}
          placeholder='目的z坐标'
          />
        </div>

      {/* 显示定点飞行请求的响应数据 */}
      <div>
        {movetopointresponseData && (
          <div>
            <h2>定点飞行信息</h2>
            <pre>{JSON.stringify(movetopointresponseData, null, 2)}</pre>
            </div>
        )}
      </div>
      </div>

    </div>
  );
};

export default MyComponent;
