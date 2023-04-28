import React, { useState } from 'react'
import im1 from '../assets/ml1.png'
import im2 from '../assets/ml2.png'
import im3 from '../assets/ml3.png'
import im4 from '../assets/ml4.png'

const Contenido = () => {
  const [lateralMenu,setLateralMenu] = useState(false);

  function OpenLateralMenu (){
    setLateralMenu(!lateralMenu)
  }

  return (
    <main className='main'>
      <aside className='aside'>
        <div className='aside__content'>
          Menu lateral
        </div>
      </aside>
      <div className='content'>
        <div className='content__ins'>
          <h2>Estadistica y probabilidad</h2>
          <h3>Medidas estadisticas</h3>
          <p>
            La <span className='marc'>media aritmética</span> es la suma de todos los valores en un conjunto de datos dividido por el número de valores en el conjunto. 
          </p>
          <img src={im1} alt="1" className='img'/>
          <p>
            La <span className='marc'>mediana</span> es el valor medio en un conjunto de datos ordenados.
          </p>
          <img src={im2} alt="2" className='img'/>
          <p>
            La <span className='marc'>moda</span> es el valor más común en un conjunto de datos.
          </p>
          <img src={im3} alt="3" className='img'/>
          <p>
            El <span className='marc'>rango</span> en estadística es la diferencia entre el valor máximo y el valor mínimo en un conjunto de datos.
          </p>
          <img src={im4} alt="4" className='img'/>
          <p>
            El <span className='marc'>rango medio</span> es la media aritmética de los valores mínimo y máximo en un conjunto de datos. Esta medida se utiliza cuando se desea tener una idea general de la variabilidad en los datos, pero se quiere una medida más precisa que el rango.
          </p>
          <p>
            El <span className='marc'>rango intercuartil</span> lo obtenemos a partir de dividir el conjunto de datos por la mitad, posteriormente a cada una de las dos mitades le calculamos la mediana. Una vez que tenemos el resultado de esas dos medianas hacemos la diferencia entre la segunda mediana y la primera mediana.
          </p>
          <h3>Distribuciones en tablas de contingencia</h3>
          <p>
            <span className='marc'>Distribución marginal</span>
            <br></br>
            En estadística, la distribución marginal se refiere a la distribución de probabilidad de una variable en un conjunto de datos, ignorando o "marginalizando" las demás variables. Es decir, si se tienen dos variables en un conjunto de datos, la distribución marginal de una variable se obtiene calculando la distribución de probabilidad de esa variable y omitiendo la otra variable.
            <br></br>
            La distribución marginal es útil para entender la distribución de una variable en un conjunto de datos sin tener en cuenta otras variables que puedan afectarla. También puede ser útil para hacer comparaciones entre diferentes conjuntos de datos o para hacer inferencias sobre una variable en particular.
            <br></br>
            <br></br>
            <span className='marc'>Distribución condicional</span>
            <br></br>
            En estadística, la distribución condicional se refiere a la distribución de probabilidad de una variable dada una condición o restricción en otra variable. Es decir, si se tienen dos variables en un conjunto de datos, la distribución condicional de una variable se obtiene calculando la distribución de probabilidad de esa variable para un valor o un rango de valores específicos de la otra variable.
          </p>
          <h3>Medidas de dispercion</h3>
          <p>
            En estadística, la dispersión se refiere a la variabilidad o diferencia que existe entre los valores de un conjunto de datos. Es decir, la dispersión indica cuánto se desvían los datos individuales de la media del conjunto de datos.
            <br></br>
            rango
            <br></br>
            rango medio
            <br></br>
            varianza
            <br></br>
            desviacion estandar
            <br></br>
            desviacion media absoluta {`(DMA)`}
          </p>
          <h2>Python</h2>
          <h2>Editores de codigo</h2>
          <p>
            Para el editor de codigo utilizaremos Google Colab ya que proporciona un entorno de edición de código en línea en forma de cuadernos de Jupyter Notebook. Los cuadernos de Jupyter Notebook son archivos interactivos que contienen código de programación, texto descriptivo y elementos multimedia, como imágenes y gráficos, todo en un solo documento
            <br></br>
            Google Colab es una herramienta gratuita basada en la nube que permite a los usuarios escribir, ejecutar y colaborar en código de Python en un entorno Jupyter Notebook en línea. Es una plataforma de aprendizaje automático, ciencia de datos y análisis de datos que proporciona acceso a recursos de computación de alta gama, como CPU, GPU y TPU, sin la necesidad de tener una máquina física de alto rendimiento.
          </p>
          <h2>Matplotlib</h2>
          <p>
            Matplotlib es una biblioteca de visualización de datos en Python que permite crear gráficos en 2D y 3D de alta calidad.
            <br></br>
            Con Matplotlib, se pueden crear gráficos de líneas, barras, dispersión, histogramas, entre otros, y personalizarlos según las necesidades del usuario. La biblioteca también ofrece la posibilidad de agregar etiquetas, títulos, leyendas y otros elementos para mejorar la presentación de los gráficos.
            <br></br>
          </p>
          


          <h3>Comandos basicos</h3>
          <p>Importar la libreria</p>
          <code className='coding'>
            Import matplotlib.pyplot as plt
          </code>
          <p>
            Funciones para definir un tipo de grafico
          </p>
          <div>{`.plot()`}</div>
          <div>{`.bar()`}</div>
          <div>{`.hist()`}</div>
          <div>{`.scatter()`}</div>
          <div>{`.pie()`}</div>

          <p>
            Funcion para mostrar el grafico predefinido
          </p>
          <div>{`.show()`}</div>

          <p>
            Funciones para personalizar el grafico
          </p>
          <div>{`.xlabel()`}</div>
          <div>{`.ylabel()`}</div>
          <div>{`.title()`}</div>
          <div>{`.legend()`}</div>
          <div>{`.grid()`}</div>
          <div>{`.minorticks_on()`}</div>
          <div>{`.yticks()`}</div>

          <h2>Numpy</h2>
          <p>
            NumPy es una biblioteca de Python utilizada para el procesamiento de datos numéricos. El nombre NumPy proviene de "Numerical Python". Esta biblioteca es muy popular entre los científicos de datos, ingenieros y matemáticos porque proporciona una forma eficiente y fácil de trabajar con matrices y arreglos numéricos.
            <br></br>
            NumPy proporciona un objeto de matriz multidimensional que se utiliza para almacenar datos homogéneos, es decir, datos del mismo tipo. También proporciona una amplia variedad de funciones matemáticas y herramientas para trabajar con estos arreglos. Algunas de las operaciones comunes que se pueden realizar con NumPy incluyen el cálculo de estadísticas, la manipulación de datos, la transformación de matrices y la aplicación de filtros.
          </p>
          <h3>Comandos basicos</h3>
          <p>Importar la libreria</p>
          <code className='coding'>
            Import numpy as np
          </code>
          <p>
            Lo importante de numpy es la creacion de matrices. Se puede, adicionalmente, especificar el tipo de datos a utilizar como int, float, object, datetime; esto cuando se necesite mas control sobre como se almacenan los datos.
          </p>
          <code>
            arreglo = np.array
          </code>
          <h3>Matrices vacias</h3>
          <p>Matriz con valores todos iguales a 1</p>
          <code className='coding'>
            unos = np.ones((3,4))
            <br></br>
            print(unos)
            <br></br>
            #crea una matriz de 3 filas y 4 columnas con todos 1
          </code>
          <p>Matriz con valores todos iguales a 0</p>
          <code className='coding'>
            ceros = np.zeros((3,4))
            <br></br>
            print(ceros)
            <br></br>
            #crea una matriz de 3 filas y 4 columnas con todos 0
          </code>
          <p>Matriz con numero aleatorios</p>
          <code className='coding'>
            aleatorios = np.random.random((2,2))
            <br></br>
            print(aleatorios)
            <br></br>
            #crea una matriz con valores aleatorios de dimension 2x2
          </code>
          <p>Matriz vacia {`(es diferente de la matriz de ceros porque esta no tiene ningún elemento dentro de ella sino los espacios para colocar los elementos, mientras que una matriz de ceros, tiene este número dentro de cada elemento.)`}</p>
          <code className='coding'>
            vacia = np.empty((3,2))
            <br></br>
            print(vacia)
            <br></br>
            #crea una matriz sin elementos de dimension 3x2
          </code>
          <p>Matriz que contiene un solo valor especifico en todas sus posiciones</p>
          <code className='coding'>
            full = np.full((2,2),8)
            <br></br>
            print(full)
            <br></br>
            #crea una matriz con el valor 8 en todas sus posiciones de dimension 2x2
          </code>
          


          <h2>Machine Learning</h2>
        </div>
      </div>
    </main>
  )
}

export default Contenido