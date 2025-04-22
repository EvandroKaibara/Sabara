import './Carrossel.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const Carrossel = () => {
    return(
        <div className="carrossel">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <a href='#'>
              <div className="slide-conteudo">
                <img src="/img/Slide1.png" alt="Slide 1" />
                <p className="slide-texto">A Importância de um Sistema Digital no Acompanhamento Médico</p>
              </div>
            </a>            
          </SwiperSlide>
          <SwiperSlide>
            <a href='#'>
              <div className="slide-conteudo">
                <img src="/img/Slide2.png" alt="Slide 2" />
                <p className="slide-texto">Lançamos o Núcleo de Apoio à Criança com Síndrome de Down</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href='#'>
              <div className="slide-conteudo">
                <img src="/img/Slide3.png" alt="Slide 3" />
                <p className="slide-texto">Novembrinho azul – os cuidados com a saúde dos meninos devem começar cedo</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href='#'>
              <div className="slide-conteudo">
                <img src="/img/Slide4.png" alt="Slide 4" />
                <p className="slide-texto">Exames Laboratoriais no Centro de Excelência do Sabará Hospital Infantil</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href='#'>
              <div className="slide-conteudo">
                <img src="/img/Slide5.png" alt="Slide 5" />
                <p className="slide-texto">Sabará faz parte do Pacto Empresarial pela Integridade e contra a Corrupção</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href='#'>
              <div className="slide-conteudo">
                <img src="/img/Slide6.png" alt="Slide 6" />
                <p className="slide-texto">Profissionais Child Life apostam no brincar como recurso terapêutico durante internações</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href='#'>
              <div className="slide-conteudo">
                <img src="/img/Slide7.png" alt="Slide 7" />
                <p className="slide-texto">Diagnóstico precoce e tratamento multidisciplinar fazem a diferença em casos de câncer pediátrico</p>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    );
} 

export default Carrossel;
