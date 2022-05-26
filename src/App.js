import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import 'antd/dist/antd.css';
import { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { updateRedux } from './store/action/dataAction';

function App() {
  const [data, setData] = useState(null)
  const dataInState = useSelector((state) => state.data);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    setData(dataInState)
  }, [dataInState])

  const updateState = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(updateRedux(e.target.value))
  }
  return (
    <div className="main-container">
      <h1>Assignment Redux</h1>
      <div>Store: {data?.data}</div>
      <Button type="primary" className="update-btn" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <input type="text" placeholder="Enter a number" onChange={updateState} />
      </Modal>
    </div>
  );
}

export default App;
