import './Home.scss';

import BgcMain from '../../components/BgcMain/BgcMain';
import MainDis from '../../components/MainDis/MainDis';
import MiniBlog from '../../components/MiniBlog/MiniBlog';

function Home () {
    return (
        <main className="app-main-home">
            <BgcMain/>
            <MainDis/>
            <MiniBlog/>
        </main>
    )
}

export default Home;