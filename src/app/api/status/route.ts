export async function GET() {
  return new Response(
    `import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.datasets import cifar10, mnist, imdb
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.utils import to_categorical
from tensorflow.keras import layers,initializers
from tensorflow.keras.applications import VGG19
import matplotlib.pyplot as plt
from tensorflow.keras.models import Model
import numpy as np

(xtr,ytr),(xte,yte) = cifar10.load_data()
(xtr,ytr),(xte,yte)=mnist.load_data()
xtr = xtr[:1500]
ytr = ytr[:1500]
xte = xte[:500]
yte = yte[:500]
max_word = 10000
max_length = 200
(xtr, ytr), (xte, yte) = imdb.load_data(num_words=max_word)
xtr , xte = pad_sequences(xtr,maxlen = max_length)  , pad_sequences(xte,maxlen = max_length)
model = Sequential([
    layers.Embedding(input_dim=max_word,output_dim = 128 , input_length= max_length),
    layers.LSTM(128),
    layers.Dense(1,activation='sigmoid')
])
model = Sequential([
    layers.Embedding(input_dim=max_word,output_dim = 128 , input_length= max_length),
    layers.GRU(128),
    layers.Dense(1,activation='sigmoid')
])
test_seq = np.reshape(xte[7], (1, -1))
print(test_seq)
pred = model.predict(test_seq)[0]   
print(yte[7])
print(pred)
if pred[0]>0.5:
    print("positive")

import matplotlib.pyplot as plt
plt.figure(figsize=(12,5))
plt.subplot(1,2,1)
plt.plot(hist.history["accuracy"])

xtr, xte = xtr/255 , xte/255
ytr , yte = to_categorical(ytr),to_categorical(yte)


xtr_rgb = tf.image.grayscale_to_rgb(tf.expand_dims(xtr,axis=-1))
xte_rgb = tf.image.grayscale_to_rgb(tf.expand_dims(xte,axis=-1))

xtr_resize = tf.image.resize(xtr_rgb,(244,244))/255
xte_resize = tf.image.resize(xte_rgb,(244,244))/255

def create_model(ini,drop,l2):
    model = Sequential([
        layers.Flatten(input_shape=(32,32,3)),
        layers.Dense(512,kernel_initializer=ini,kernel_regularizer=l2,activation="relu"),
        layers.Dense(256,kernel_initializer=ini,kernel_regularizer=l2,activation="relu"),
        layers.Dense(128,kernel_initializer=ini,kernel_regularizer=l2,activation="relu"),
        layers.Dense(64,kernel_initializer=ini,kernel_regularizer=l2,activation="relu"),
        layers.Dense(32,kernel_initializer=ini,kernel_regularizer=l2,activation="relu"),
        layers.Dense(10,activation="softmax")
    ])
    return model

CnnModel= Sequential([
    layers.Reshape((28,28,1)),
    layers.Conv2D(32,3,activation='relu'),
    layers.MaxPooling2D(),
    layers.Conv2D(64,3,activation='relu'),
    layers.MaxPooling2D(),
    layers.Conv2D(64,3,activation='relu'),
    layers.MaxPooling2D(),
    layers.Flatten(),
    layers.Dense(64,activation='relu'),
    layers.Dense(10,activation='softmax')
])

vgg_model = VGG19(weights='imagenet',include_top=False , input_shape=(244,244,3))

for i in vgg_model.layers:
    i.trainable = False

x = layers.Flatten()(vgg_model.output)
x= layers.Dense(256,activation='relu')(x)
output = layers.Dense(10,activation='softmax')(x)

final_model = Model(inputs=vgg_model.input, outputs=output)

x_ini = initializers.glorot_normal()
k_ini = initializers.he_normal()

x_model = create_model(x_ini,0.3,tf.keras.regularizers.l2(0.001))
k_model = create_model(k_ini,0.3,tf.keras.regularizers.l2(0.001))

x_model.compile(optimizer='Adam',loss='categorical_crossentropy',metrics=['accuracy'])
k_model.compile(optimizer='Adam', loss="categorical_crossentropy" , metrics=['accuracy'])

x_history = x_model.fit(xtr,ytr, epochs=5, batch_size=64 , validation_data=(xte,yte))

y_history = k_model.fit(xtr,ytr , epochs=5, batch_size=64 , validation_data=(xte,yte))

acc = x_model.evaluate(xte,yte)

sample_img=xtr[:1] pred=model.predict(sample_img)
 
class_lab=['airplanes','automobile','bird','cat','deer','dog','frog','horse','ship','truck'] fig,axs=plt.subplots(1,2,figsize=(10,2))
axs[0].imshow(sample_img[0]) axs[0].axis('off') axs[1].barh(class_lab,pred[0]) plt.tight_layout()
plt.show()

plt.figure(figsize=(12,6))
plt.subplot(1,2,1)
plt.plot(x_history.history['accuracy'],label='Xavier(train)') 
plt.plot(x_history.history['val_accuracy'],label='Xavier(validation)')
plt.legend()
plt.subplot(1,2,2)
plt.plot(y_history.history['accuracy'],label='kalimi(train)') 
plt.plot(y_history.history['val_accuracy'],label='kalimi(validation)')
plt.legend()
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
