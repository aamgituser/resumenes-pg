import React, { useState } from 'react'
import im1 from '../assets/ml1.png'
import im2 from '../assets/ml2.png'
import im3 from '../assets/ml3.png'
import im4 from '../assets/ml4.png'
import im5 from '../assets/ml5.png'
import Aside from '../components/Aside'
const Contenido = () => {
  const [lateralMenu,setLateralMenu] = useState(false);

  function OpenLateralMenu (){
    setLateralMenu(!lateralMenu)
  }

  return (
    <main className='main'>
      <Aside/>
      <div className='content'>
        <div className='content__ins'>
          <h2 id='estadistica_y_probabilidad'>Estadistica y probabilidad</h2>
          <h3 id='medidas_estadisticas'>Medidas estadisticas</h3>
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/brymAiZF0x0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'></iframe>
          <p></p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Y2mv3eFVRSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'></iframe>
          <h3 id='distribuciones_en_tablas_de_contingencia'>Distribuciones en tablas de contingencia</h3>
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/V1KvjGA2d4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'></iframe>
          <h3 id='medidas_de_dispercion'>Medidas de dispercion</h3>
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
          <h2 id='python'>Python</h2>
          <p>Cosas importantes de python</p>
          <h2 id='editores_de_codigo'>Editores de codigo</h2>
          <p>
            Para el editor de codigo utilizaremos Google Colab ya que proporciona un entorno de edición de código en línea en forma de cuadernos de Jupyter Notebook. Los cuadernos de Jupyter Notebook son archivos interactivos que contienen código de programación, texto descriptivo y elementos multimedia, como imágenes y gráficos, todo en un solo documento
            <br></br>
            Google Colab es una herramienta gratuita basada en la nube que permite a los usuarios escribir, ejecutar y colaborar en código de Python en un entorno Jupyter Notebook en línea. Es una plataforma de aprendizaje automático, ciencia de datos y análisis de datos que proporciona acceso a recursos de computación de alta gama, como CPU, GPU y TPU, sin la necesidad de tener una máquina física de alto rendimiento.
          </p>
          <h2 id='matplotlib'>Matplotlib</h2>
          <p>
            Matplotlib es una biblioteca de visualización de datos en Python que permite crear gráficos en 2D y 3D de alta calidad.
            <br></br>
            Con Matplotlib, se pueden crear gráficos de líneas, barras, dispersión, histogramas, entre otros, y personalizarlos según las necesidades del usuario. La biblioteca también ofrece la posibilidad de agregar etiquetas, títulos, leyendas y otros elementos para mejorar la presentación de los gráficos.
            <br></br>
          </p>
          
          <h3 id='matplotlib_comandos_basicos'>Comandos basicos</h3>
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

          <h2 id='numpy'>Numpy</h2>
          <p>
            NumPy es una biblioteca de Python utilizada para el procesamiento de datos numéricos. El nombre NumPy proviene de "Numerical Python". Esta biblioteca es muy popular entre los científicos de datos, ingenieros y matemáticos porque proporciona una forma eficiente y fácil de trabajar con matrices y arreglos numéricos.
            <br></br>
            NumPy proporciona un objeto de matriz multidimensional que se utiliza para almacenar datos homogéneos, es decir, datos del mismo tipo. También proporciona una amplia variedad de funciones matemáticas y herramientas para trabajar con estos arreglos. Algunas de las operaciones comunes que se pueden realizar con NumPy incluyen el cálculo de estadísticas, la manipulación de datos, la transformación de matrices y la aplicación de filtros.
          </p>
          <h3 id='numpy_comandos_basicos'>Comandos basicos</h3>
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
          <h3 id='matrices_vacias'>Matrices vacias</h3>
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
          <h3 id='redimension_de_matrices'>Redimension de matrices</h3>
          <p><span className='marc'>{`reshape()`}</span></p>
          <p>
            {`En NumPy, puedes redimensionar una matriz utilizando la función "reshape()". La función "reshape()" toma una matriz existente y la redimensiona en una nueva forma (shape) especificada. Aquí hay un ejemplo de cómo usar la función "reshape()" para redimensionar una matriz:
            `}<br></br><br></br>
            Supongamos que tienes una matriz de 12 elementos:
          </p>
          <code className='coding'>
            import numpy as np
            <br></br><br></br>
            # Crear una matriz de 12 elementos<br></br>
            a = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
          </code>
          <p>{`Para redimensionar la matriz a una forma (shape) de (3, 4) (es decir, una matriz de 3 filas y 4 columnas), puedes usar la función "reshape()" de la siguiente manera:`}</p>
          <code className='coding'>
            # Redimensionar la matriz a una forma (shape) de (3, 4)
            <br></br>
            b = a.reshape(3, 4)
          </code>
          <p>{`Ten en cuenta que la función "reshape()" devuelve una nueva matriz con la forma especificada, pero no modifica la matriz original. Si deseas modificar la matriz original, debes asignar la matriz redimensionada a la variable original:`}</p>
          <code className='coding'>
            # Modificar la matriz original asignando la matriz redimensionada a la variable original
            <br></br>
            a = a.reshape(3, 4)
          </code>
          <p><span className='marc'>np.newaxis</span></p>
          <p>
            Supongamos que tienes una matriz de datos bidimensional en NumPy llamada X, que contiene 3 características {`(columnas)`} y 5 instancias {`(filas)`}:
          </p>
          <code className='coding'>
            import numpy as np
            <br></br>
            X = np.array([[1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9], 
              [10, 11, 12], 
              [13, 14, 15]])

          </code>
          <p>
          {`
            Si quisieras seleccionar solo la segunda columna de esta matriz para crear una nueva matriz con forma (5, 1), es decir, 5 filas y 1 columna, puedes utilizar la sintaxis [:, np.newaxis] para agregar una nueva dimensión a la selección de la columna:
          `}
          </p>
          <code className='coding'>
            y = X[:, 1, np.newaxis]
          </code>
          <p>
            {
              `Aquí, X[:, 1] selecciona todas las filas de la segunda columna de la matriz X. Luego, np.newaxis agrega una nueva dimensión a esta selección, convirtiéndola en una matriz unidimensional con forma (5, 1). El resultado es una nueva matriz llamada y con la misma cantidad de filas que X, pero con solo una columna que contiene la segunda columna de X.`
            }
          </p>
          <p><span className='marc'>N numero de filas 1 columna {`(matriz vector)`}</span></p>
          <p>{`Para redimensionar una matriz en NumPy de tal manera que tenga una columna y "n" número de filas (dato desconocido), debes usar la función "reshape()" y establecer la dimensión de las columnas en 1 y dejar la dimensión de las filas como "-1". La opción "-1" le indica a NumPy que calcule automáticamente el número de filas necesarias para que la matriz tenga la forma deseada. Aquí hay un ejemplo:
          `}</p>
          <code className='coding'>
          import numpy as np
          <br></br><br></br>
          # Crear una matriz de ejemplo con 12 elementos <br></br>
          a = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
          <br></br><br></br>
          # Redimensionar la matriz a una columna y "n" filas<br></br>
          b = a.reshape(-1, 1)
          </code>
          <p><span className='marc'>1 fila y N numero de columnas</span></p>
          <p>{`Para redimensionar una matriz en NumPy para que tenga una fila y un número desconocido de columnas, puedes usar la función reshape con el argumento -1, que indica que NumPy debe calcular automáticamente la dimensión desconocida en función de las otras dimensiones y la cantidad total de elementos en la matriz.
          `}
          <br></br><br></br>
          {
            `Por ejemplo, si tienes una matriz X de forma (3, 4) y quieres redimensionarla para que tenga una fila y un número desconocido de columnas, puedes hacer lo siguiente:`
          }
          </p>
          <code className='coding'>
            import numpy as np
            <br></br><br></br>
            X = np.array([[1, 2, 3, 4],
              [5, 6, 7, 8],
              [9, 10, 11, 12]])
            <br></br><br></br>
            X_reshaped = X.reshape(1, -1)
          </code>
          <p>
            {
              `Aquí, X.reshape(1, -1) redimensiona la matriz X para tener 1 fila y un número desconocido de columnas, y NumPy calcula automáticamente la cantidad de columnas necesarias en función de la forma original de la matriz. El resultado se guarda en la variable X_reshaped.`
            }
          </p>
          <h2 id='pandas'>Pandas</h2>
          <p>HS</p>
          <h2 id='sickitlearn'>Scikit Learn</h2>
          <p>
            Scikit-learn es una biblioteca de aprendizaje automático para Python que proporciona una amplia gama de algoritmos {`(supervisados y no supervisados)`} y herramientas para tareas de minería y análisis de datos. Con Scikit-learn, los usuarios pueden aplicar técnicas de aprendizaje automático como clasificación, regresión, agrupamiento y reducción de dimensionalidad a sus datos de manera eficiente y fácil de usar. Scikit-learn es muy popular en la comunidad de Python debido a su facilidad de uso, documentación detallada y la gran cantidad de ejemplos y recursos disponibles.
          </p>
          <h3 id='datasets'>DataSets</h3>
          <p>
            En scikit-learn, un dataset es un conjunto de datos estructurado que se utiliza para entrenar y evaluar modelos de aprendizaje automático. Los datasets en scikit-learn se componen de dos partes: un conjunto de características (features) y un conjunto de etiquetas (labels), que se utilizan para entrenar un modelo predictivo.
            <br></br>
            Por ejemplo, en un problema de clasificación de imágenes, un dataset podría contener imágenes en escala de grises como características y las etiquetas correspondientes que indican las clases de las imágenes (por ejemplo, "perro" o "gato"). En un problema de regresión, las características podrían ser variables numéricas y las etiquetas podrían ser valores continuos.
            <br></br>
            Scikit-learn incluye varios datasets incorporados que se pueden cargar directamente desde el paquete, como el conjunto de datos Iris y el conjunto de datos de dígitos escritos a mano (MNIST). Estos datasets se utilizan comúnmente como ejemplos de cómo utilizar diferentes modelos de aprendizaje automático en scikit-learn. Además, scikit-learn también proporciona herramientas para cargar y trabajar con datasets personalizados.
          </p>
          <p><span className='marc'>Visualizar la informacion de un DataSet</span></p>
          <code className='coding'>
           from sklearn import datasets
           <br></br><br></br>
           #importamos el dataset de los datos Iris
           <br></br>
           iris = dataset.load_iris()
           <br></br><br></br>
           #muestra el contenido de todo el dataset
           <br></br>
           print(iris)
           <br></br><br></br>
           #muestra una lista con los de cada dato dentro del dataset
           <br></br>
           print(iris.keys())
           <br></br><br></br>
           #muestra la descripcion detallada de los datos 
           <br></br>
           print(iris.DESCR)
           <br></br><br></br>
           #muestra la dimension de la data como (500 x 13), es decir 500 filas y 13 columnas
           <br></br>
           print(iris.data.shape)
           <br></br><br></br>
           #muestra la informacion de las columnas en forma de una lista con los nombres
           <br></br>
           print(iris.feature_names)
          </code>
          <p><span className='marc'>Preparacion de datos para aplicarlo en un modelo de machine learning</span></p>
          <p>
            Vamos a tener en cuenta el set de datos anteriores para realizar esto. 
          </p>
          <code className='coding'>
            x = iris.data[:, np.newaxis, 5]
            <br></br>
            y = iris.target
          </code>
          <p>
            "iris.data" se refiere a los datos del conjunto de datos Iris. Este conjunto de datos contiene información sobre diferentes características de las flores iris, como el ancho y largo de los pétalos y sépalos.<br></br><br></br>
            La sintaxis "{`[ : , np.newaxis, 5 ]`}" se usa para seleccionar una columna específica de los datos y agregar una nueva dimensión a esa columna. En este caso, la quinta columna {`(índice 5)`} se selecciona y se agrega una dimensión adicional a esa columna.
            La nueva dimensión se agrega usando "np.newaxis", que es un alias para "None" en numpy. Básicamente, agrega una dimensión adicional a los datos seleccionados.<br></br><br></br>
            El resultado final es que "x" contiene una matriz de datos que consiste en una sola columna {`(la quinta columna del conjunto de datos Iris)`} con una dimensión adicional agregada.
            <br></br><br></br>
            La sintaxis {`"[:, np.newaxis]"`} se utiliza en NumPy para agregar una nueva dimensión a una matriz existente.
            <br></br><br></br>
            El símbolo ":" en la sintaxis se utiliza para indexar una matriz multidimensional en NumPy. En este caso, ":" significa "seleccionar todas las filas". Entonces, {`"[:, np.newaxis]"`} se lee como "seleccionar todas las filas y agregar una nueva dimensión".
            <br></br><br></br>
            El resultado de agregar una nueva dimensión a una matriz puede ser útil en muchas situaciones, como cuando se trabaja con operaciones de álgebra lineal o visualización de datos. Por ejemplo, si tiene una matriz unidimensional de datos y desea convertirla en una matriz bidimensional para que pueda representarla gráficamente en un diagrama de dispersión, puede usar la sintaxis {`"[:, np.newaxis]"`} para agregar una nueva dimensión y crear una matriz bidimensional de datos.
          </p>
          <h3>Regresion lineal simple</h3>
          <p>Importar la libreria</p>
          <code className='coding'>
            from sklearn import linear_model            
          </code>
          <p><span className='marc'>Comandos basicos</span></p>
          <code className='coding'>
            #define el algoritmo
            <br></br>
            linear_model.LinearRegresion()
          </code>
          <code className='coding'>
            #entrena el modelo
            <br></br>
            fit(x,y)
          </code>
          <code className='coding'>
            #predecir modelo
            <br></br>
            predict(x)
          </code>
          <code className='coding'>
            #conocer pendiente de la funcion
            <br></br>
            _coef
          </code>
          <code className='coding'>
            #conocer interseccion
            <br></br>
            intercept_
          </code>
          <p><span className='marc'>Ejemplo de regresion lineal</span></p>
          <code className='coding'>
            Import numpy as np
            <br></br>
            from sklearn import linear_model
            <br></br>
            Import matplotlib.pyplot as plt
            <br></br><br></br>
            # Datos de ejemplo
            <br></br>
            eje_x = np.array([1, 2, 3, 4, 5, 6])
            <br></br>
            eje_y = np.array([20, 30, 44, 67, 90, 103])
            <br></br><br></br>
            # Crear el modelo de regresión lineal
            <br></br>
            regresion = LinearRegression()
            <br></br><br></br>
            # Ajustar el modelo a los datos
            <br></br>
            regresion.fit(eje_x.reshape(-1, 1), eje_y)
            <br></br><br></br>
            # Predecir los valores para los datos de entrada
            <br></br>
            predicciones = regresion.predict(eje_x.reshape(-1, 1))
            <br></br><br></br>
            # Visualizar los datos y la línea de regresión
            <br></br>
            plt.scatter(eje_x, eje_y)
            <br></br>
            plt.plot(eje_x, predicciones, color='red')
            <br></br>
            plt.xlabel('Eje X')
            <br></br>
            plt.ylabel('Eje Y')
            <br></br>
            plt.title('Regresión lineal simple')
            <br></br>
            plt.show()
            <br></br><br></br>
            #ahora vamos a ver las caracteristicas 
          </code>
          <p>Ejemplo de regresion lineal utilizando un dataset de sickit learn</p>
          <code className='coding'>
            import numpy as np
            <br></br>
            from sklearn.datasets import load_diabetes
            <br></br>
            from sklearn.linear_model import LinearRegression
            <br></br>
            import matplotlib.pyplot as plt
            <br></br><br></br>
            # Cargar el dataset diabetes
            <br></br>
            diabetes = load_diabetes()
            <br></br><br></br>
            # Seleccionar la característica "age" como variable independiente (X)
            <br></br>
            X = diabetes.data[:, np.newaxis, 2]
            <br></br><br></br>
            # Seleccionar la variable dependiente (y)
            <br></br>
            y = diabetes.target
            <br></br><br></br>
            # Crear un modelo de regresión lineal
            <br></br>
            reg = LinearRegression()
            <br></br><br></br>
            # Entrenar el modelo con los datos de edad
            <br></br>
            reg.fit(X, y)
            <br></br>
            # Predecir los valores de la variable dependiente (y) con el modelo entrenado
            <br></br>
            y_pred = reg.predict(X)
            <br></br>
            # Graficar los datos y la línea de regresión
            <br></br>
            plt.scatter(X, y, color='blue')
            <br></br>
            plt.plot(X, y_pred, color='red', linewidth=3)
            <br></br>
            plt.title('Regresión lineal de edad y diabetes')
            <br></br>
            plt.xlabel('Edad')
            <br></br>
            plt.ylabel('Nivel de glucosa en sangre')
            <br></br>
            plt.show()
          </code>
          <img src={im5} alt="5" className='img'/>
        </div>
      </div>
    </main>
  )
}

export default Contenido