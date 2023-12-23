import { useState } from 'react';
import './App.css';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';





function App() {
  return (
    <>
      <div className="c-fondo" >
        <div className="container" id='top'>
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5 aaa">
              <a href="">
                <p className='correo '> Vilapoviswilmer7@gmail.com</p>
              </a>

            </div>
            <div className="col-md-1 mt-5 home">
              <button className='text-white'>Home</button>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-9 dsc">
              <div className="row">
                <div className="col-md-7">
                  <h3 className='text-white'>Hola, Soy wilmer 👋</h3>
                  <p className='dsc mt-4'>
                    ¡Buen día! Soy un <span className='red'>programador junior</span> especializado en desarrollo web,
                    con experiencia tanto en el <span className='red'>frontend</span> como en el <span className='red'>backend</span>. Actualmente,
                    estoy trabajando con las tecnologías <span className='red'>Laravel</span> y
                    <span className='red'> React</span>.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 mb-4">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h4 className='text-white'> Resumen Profesional (4)</h4>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <Accordion allowToggle>

                <AccordionItem className='b-acor'>
                  <h2 className='acor'>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        Tecnologías Dominadas
                      </Box>
                      <AccordionIcon style={{ color: 'white' }} />

                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                    </ul>
                    <p>Estas son las herramientas en las que tengo un sólido dominio,
                      permitiéndome desarrollar proyectos web de manera efectiva y estilizada.</p>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem className='b-acor'>
                  <h2 className='acor'>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        Experiencia Laboral
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    He adquirido experiencia en el desarrollo de páginas administrables,
                    aplicando con destreza las tecnologías previamente mencionadas.
                    Mi enfoque se centra en la creación de soluciones web funcionales y estéticas.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem className='b-acor'>
                  <h2 className='acor'>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        Proyectos Destacados
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    En mi proyecto más destacado, utilicé un enfoque integral combinando Laravel para la estructura del backend,
                    Bootstrap para un diseño moderno y adaptable, y JavaScript para mejorar la interactividad.
                    Este sistema representa un hito significativo en mi carrera,
                    demostrando mi capacidad para crear soluciones web robustas y estéticas. Puedes explorar
                    el proyecto
                    <a href="https://www.grupohg.biz/miprimerdiente/public/"> <span className='red'> aquí.</span></a>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem className='b-acor'>
                  <h2 className='acor'>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        Educación
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Actualmente, me encuentro en el cuarto semestre de la carrera de
                    Ingeniería de Software con especialización en Inteligencia Artificial.
                    Este período de formación me ha proporcionado una base sólida en los
                    principios fundamentales de la ingeniería de software y, específicamente,
                    en la aplicación de técnicas de inteligencia artificial. Estoy comprometido
                    con mi crecimiento académico y la adquisición continua de conocimientos en
                    este emocionante campo.
                  </AccordionPanel>
                </AccordionItem>

              </Accordion>


            </div>
          </div>


          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-5">
                    <h5 className='text-white mt-5'>
                      Últimas publicaciones</h5>
                    <p className='mt-4 dsc'>
                      Pronto, mantente conectado 👀...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12">
                  <h5 className='text-white mt-5'>Ponerse en contacto</h5>
                  <p className='mt-4 dsc'>
                    Envíeme un correo electrónico al enlace maxencewolff.pro@gmail.com maxencewolff.pro@gmail.com
                    o sígueme a través de mis enlaces sociales.</p>
                  <p className='mt-5 dsc'>(version v1 my portfolio)</p>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div>

        </div>
      </div>

    </>
  )
}

export default App
