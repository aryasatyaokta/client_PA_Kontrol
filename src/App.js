import './App.css';
import Login from './auth/Login';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Register from './auth/Register';
import Dashboard from './pages/Dashboard';
import Pretest from './pages/pretest/Pretest';
import Materi from './pages/materi/Materi';
import Materi2 from './pages/materi/Materi2';
import Materi3 from './pages/materi/Materi3';
import Quiz from './pages/pretest/Quiz'
import Result from './pages/pretest/Result';
import Struktur from './pages/terstruktur/Struktur';
import QuizStruk from './pages/terstruktur/QuizStruk';
import ResultStruk from './pages/terstruktur/ResultStruk';
import Bimbing from './pages/terbimbing/Bimbing';
import QuizBim from './pages/terbimbing/QuizBim';
import ResultBim from './pages/terbimbing/ResultBim';
import Mandiri from './pages/mandiri/Mandiri';
import QuizMan from './pages/mandiri/QuizMan';
import ResultMan from './pages/mandiri/ResultMan';
import Struktur2 from './pages/terstruktur2/Struktur2';
import ResultStruk2 from './pages/terstruktur2/ResultStruk2';
import QuizStruk2 from './pages/terstruktur2/QuizStruk2';
import Bimbing2 from './pages/terbimbing2/Bimbing2';
import QuizBim2 from './pages/terbimbing2/QuizBim2';
import ResultBim2 from './pages/terbimbing2/ResultBim2';
import Mandiri2 from './pages/mandiri2/Mandiri2';
import QuizMan2 from './pages/mandiri2/QuizMan2';
import ResultMan2 from './pages/mandiri2/ResultMan2';
import GabMateri from './gabpages/GabMateri';
import GabStruktur from './gabpages/GabStruktur';
import GabBimbing from './gabpages/GabBimbing';
import GabMandiri from './gabpages/GabMandiri';
import Posttest from './pages/posttest/Posttest';
import QuizPost from './pages/posttest/QuizPost';
import ResultPost from './pages/posttest/ResultPost';
import Posttest2 from './pages/posttest2/Posttest2';
import QuizPost2 from './pages/posttest2/QuizPost2';
import ResultPost2 from './pages/posttest2/ResultPost2';
import GabPosttest from './gabpages/GabPosttest';
import PrivateRoute from './auth/PrivateRoute';
import Struktur3 from './pages/terstruktur3/Struktur3';
import QuizStruk3 from './pages/terstruktur3/QuizStruk3';
import ResultStruk3 from './pages/terstruktur3/ResultStruk3';
import Struktur4 from './pages/terstruktur4/Struktur4';
import QuizStruk4 from './pages/terstruktur4/QuizStruk4';
import ResultStruk4 from './pages/terstruktur4/ResultStruk4';
import Struktur5 from './pages/terstruktur5/Struktur5';
import QuizStruk5 from './pages/terstruktur5/QuizStruk5';
import ResultStruk5 from './pages/terstruktur5/ResultStruk5';
import Struktur6 from './pages/terstruktur6/Struktur6';
import QuizStruk6 from './pages/terstruktur6/QuizStruk6';
import ResultStruk6 from './pages/terstruktur6/ResultStruk6';
import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     sessionStorage.removeItem('TOKEN')
  //   }
  //   window.addEventListener('beforeunload', handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload)
  //   }
  // }, []);
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/pretest" element={<PrivateRoute element={<Pretest />} />} />
          <Route path="/materi" element={<PrivateRoute element={<Materi />} />} />
          <Route path="/materi2" element={<PrivateRoute element={<Materi2 />} />} />
          <Route path="/materi3" element={<PrivateRoute element={<Materi3 />} />} />

          <Route path="/quiz-pretest" element={<PrivateRoute element={<Quiz/>} />}/>
          <Route path="/hasil-pretest" element={<PrivateRoute element={<Result/>} />}/>

          <Route path="/lat-terstruktur" element={<PrivateRoute element={<Struktur />} />} />
          <Route path="/quiz-lat-terstruktur" element={<PrivateRoute element={<QuizStruk />} />} />
          <Route path="/hasil-lat-terstruktur" element={<PrivateRoute element={<ResultStruk />} />} />
          
          <Route path="/lat-terbimbing" element={<PrivateRoute element={<Bimbing />} />} />
          <Route path="/quiz-lat-terbimbing" element={<PrivateRoute element={<QuizBim/>} />} />
          <Route path="/hasil-lat-terbimbing" element={<PrivateRoute element={<ResultBim />} />} />
          
          <Route path="/lat-mandiri" element={<PrivateRoute element={<Mandiri />} />} />
          <Route path="/quiz-lat-mandiri" element={<PrivateRoute element={<QuizMan/>} />}/>
          <Route path="/hasil-lat-mandiri" element={<PrivateRoute element={<ResultMan />} />}/>

          <Route path="/lat-struktur" element={<PrivateRoute element={<Struktur2 />} />} />
          <Route path="/quiz-lat-struktur" element={<PrivateRoute element={<QuizStruk2/>} />} />
          <Route path="/hasil-lat-struktur" element={<PrivateRoute element={<ResultStruk2 />} />} />

          <Route path="/latihan-struktur2" element={<PrivateRoute element={<Struktur3 />} />} />
          <Route path="/quiz-lat-struktur2" element={<PrivateRoute element={<QuizStruk3/>} />} />
          <Route path="/hasil-lat-struktur2" element={<PrivateRoute element={<ResultStruk3 />} />} />

          <Route path="/latihan-struktur3" element={<PrivateRoute element={<Struktur4 />} />} />
          <Route path="/quiz-lat-struktur3" element={<PrivateRoute element={<QuizStruk4/>} />} />
          <Route path="/hasil-lat-struktur3" element={<PrivateRoute element={<ResultStruk4 />} />} />
          
          <Route path="/latihan-struktur4" element={<PrivateRoute element={<Struktur5 />} />} />
          <Route path="/quiz-lat-struktur4" element={<PrivateRoute element={<QuizStruk5 />} />} />
          <Route path="/hasil-lat-struktur4" element={<PrivateRoute element={<ResultStruk5 />} />} />

          <Route path="/latihan-struktur5" element={<PrivateRoute element={<Struktur6 />} />} />
          <Route path="/quiz-lat-struktur5" element={<PrivateRoute element={<QuizStruk6 />} />} />
          <Route path="/hasil-lat-struktur5" element={<PrivateRoute element={<ResultStruk6 />} />} />

          <Route path="/lat-bimbing" element={<PrivateRoute element={<Bimbing2 />} />} />
          <Route path="/quiz-lat-bimbing" element={<PrivateRoute element={<QuizBim2/>} />} />
          <Route path="/hasil-lat-bimbing" element={<PrivateRoute element={<ResultBim2 />} />} />

          <Route path="/latihan-mandiri" element={<PrivateRoute element={<Mandiri2 />} />} />
          <Route path="/quiz-latihan-mandiri" element={<PrivateRoute element={<QuizMan2/>} />} />
          <Route path="/hasil-latihan-mandiri" element={<PrivateRoute element={<ResultMan2 />} />}/>

          <Route path="/materii" element={<PrivateRoute element={<GabMateri />} />}/>
          <Route path="/latihan-struktur" element={<PrivateRoute element={<GabStruktur />} />}/>
          <Route path="/latihan-terbimbing" element={<PrivateRoute element={<GabBimbing />} />}/>
          <Route path="/latihan-mandirii" element={<PrivateRoute element={<GabMandiri/>} />}/>
          <Route path="/posttest" element={<PrivateRoute element={<GabPosttest/>} />}/>

          <Route path="/post" element={<PrivateRoute element={<Posttest />} />} />
          <Route path="/quiz-post" element={<PrivateRoute element={<QuizPost/>} />}/>
          <Route path="/hasil-post" element={<PrivateRoute element={<ResultPost/>} />}/>

          <Route path="/test" element={<PrivateRoute element={<Posttest2 />} />}/>
          <Route path="/quiz-test" element={<PrivateRoute element={<QuizPost2/>} />}/>
          <Route path="/hasil-test" element={<PrivateRoute element={<ResultPost2/>} />}/>

          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
