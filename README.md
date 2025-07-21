### ENGLISH (Русский снизу)

# Yandex Music OBS Info

**Description:**
Allows you to display information about the currently playing song from the Yandex Music website in your OBS scene. Works in tandem with this Tampermonkey script: [https://greasyfork.org/en/scripts/543237-yandex-music-obs-info](https://greasyfork.org/en/scripts/543237-yandex-music-obs-info)

**How it works:**
The Tampermonkey script collects song information from the Yandex Music website and sends it to a local server provided by this repository. The server hosts a widget webpage, which you add to your OBS scene. It then pushes the song data to that webpage in real-time.

**Features:**
Displays the song title, artist, cover image, and pause status. The text scrolls ("rotates"): <img width="584" height="91" alt="image" src="https://github.com/user-attachments/assets/ce86208d-13fe-4aa8-8eb3-751845257ecc" />

**Instructions:**

1. Download or clone this repository to your PC.
2. Install the Tampermonkey browser extension: [https://www.tampermonkey.net/](https://www.tampermonkey.net/)
3. Install the Tampermonkey script from: [https://greasyfork.org/en/scripts/543237-yandex-music-obs-info](https://greasyfork.org/en/scripts/543237-yandex-music-obs-info)
4. Make sure the domain in the script matches your region (you can see it in URL field when open YandexMusic webpage):

```  
// @match        https://music.yandex.by/*   // For Belarus
// @match        https://music.yandex.ru/*   // For Russia
```
*(Not sure how to make it work universally yet.)*

5. Run `start-server.bat` from the downloaded repo.
6. In OBS, add a **Browser** source:
<img width="462" height="480" alt="image" src="https://github.com/user-attachments/assets/313b6594-ad7a-4136-8c58-437993b3b8f5" />

7. Set the URL to `http://localhost:3000`. You can keep the default Width and Height:
<img width="705" height="475" alt="image" src="https://github.com/user-attachments/assets/e9f9b99a-bcea-4801-921f-28e005564c71" />

8. If the server is running but no music is playing, a default "error" texture will be shown.
9. Start playing music on Yandex Music (make sure the Tampermonkey script is installed). The widget should start displaying song info.

---

### РУССКИЙ

# Yandex Music OBS Info

**Описание:**  
Позволяет отображать информацию о текущей песне с сайта Яндекс Музыки в сцене OBS. Работает в связке со скриптом Tampermonkey: [https://greasyfork.org/ru/scripts/543237-yandex-music-obs-info](https://greasyfork.org/ru/scripts/543237-yandex-music-obs-info)

**Как это работает:**  
Скрипт Tampermonkey собирает информацию о проигрываемой песне с сайта Яндекс Музыки и отправляет её на локальный сервер из этого репозитория. Сервер размещает веб-страницу виджета, которую вы добавляете в OBS. Далее данные о песне передаются на эту страницу в режиме реального времени.

**Функции:**  
Отображает название песни, исполнителя, обложку и статус паузы. Текст прокручивается ("вращается"):
<img width="584" height="91" alt="image" src="https://github.com/user-attachments/assets/ce86208d-13fe-4aa8-8eb3-751845257ecc" />

**Инструкция:**
1. Скачайте или клонируйте этот репозиторий на ваш компьютер.
2. Установите расширение Tampermonkey для браузера: [https://www.tampermonkey.net/](https://www.tampermonkey.net/)
3. Установите скрипт Tampermonkey отсюда: [https://greasyfork.org/ru/scripts/543237-yandex-music-obs-info](https://greasyfork.org/ru/scripts/543237-yandex-music-obs-info)
4. Убедитесь, что домен в скрипте соответствует вашему региону (можно увидеть в поле ссылки, когда открываете Yandex Music):

```  
// @match        https://music.yandex.by/*   // Для Беларуси
// @match        https://music.yandex.ru/*   // Для России
```
*(Пока не знаю, как сделать, чтобы работало везде.)*

5. Запустите `start-server.bat` из скачанного репозитория.
6. В OBS добавьте источник **Browser** (Браузер):
<img width="462" height="480" alt="image" src="https://github.com/user-attachments/assets/313b6594-ad7a-4136-8c58-437993b3b8f5" />

7. Укажите URL `http://localhost:3000`. Ширину и высоту можно оставить по умолчанию:
<img width="705" height="475" alt="image" src="https://github.com/user-attachments/assets/e9f9b99a-bcea-4801-921f-28e005564c71" />

8. Если сервер запущен, но музыка не играет — будет отображаться стандартная "ошибка".
9. Включите музыку на Яндекс Музыке (убедитесь, что скрипт Tampermonkey установлен) — и виджет начнёт отображать информацию о песне.


