import './Home.scss';

import BgcMain from '../../components/BgcMain/BgcMain';
import MainDis from '../../components/MainDis/MainDis';

function Home () {
    return (
        <main className="app-main-home">
            <BgcMain/>
            <MainDis/>
        </main>
    )
}

export default Home;