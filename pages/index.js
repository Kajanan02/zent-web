import Home from '../components/Home'
import MetaData from '../components/MetaData'


export default function Index() {
  return (
    <div>
      <MetaData
        title={`Zent - Class Management System`}
        description={`web app simple, online, collaborative and user friendly to create a safe and private environment which connects teachers with their 
        students and their peers, all within one platform. It is a closed learning ecosystem. 1+ Years, 1+ Client.`}
        // image={``}
        url={`https://www.zent.app/`}
      />

      <Home />
    </div>
  )
}