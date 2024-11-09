import './Home.scss';

import BgcMain from '../../components/BgcMain/BgcMain';
import MainDis from '../../components/MainDis/MainDis';
import MiniBlog from '../../components/MiniBlog/MiniBlog';
import StartBlock from '../../components/StartBlock/StartBlock';
function Home () {
    return (
        <main className="app-main-home">
            <BgcMain/>
            <MainDis/>
            <MiniBlog/>
            <StartBlock></StartBlock>
        </main>
    )
}

export default Home;