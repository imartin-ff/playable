# Gulp Сборка


## Начало работы
Для начала работы с сборкой скопируйте содержимое репозитория, затем находясь в корне проекта используйте комманду `npm i`  для того что бы установить все необходимые зависимости.

После этого с помощью комманды `gulp` можно запустить сборку для начала разработки.


## HTML
Для работы с html используется плагин **gulp-file-include ** который позволяет вставлять части html-кода в html файлы.

    Для вставки html-частей используйте: @include('file.html')


## CSS
Для работы с css используется препроцесор **sass** в синтаксисе **scss**.
Для подключения сторонних библиотек достаточно закинуть в файл в ***/scss/libs/***, файлы из этой папки сжимаются в файл **libs.css** и минифицируются.

Стоит уточнить что файлы подключаются в **libs.css** той очередности в которой были добавлены в папку, это важно знать если при подключении библиотек их последовательность играет роль.

В конечной папке** ./app/css** сохраняется 2 типа файлов, .**css** и **.min.css**, не минифицированый и миницифированый соответственно

    Для подключения css/sass файлов используйте @import

## JavaScript
Основной **JS** хранится в файле **main.js.**
Для подключения библиотек как и с **css** достаточно закинуть файлы в папку libs после чего все содержимое папки минифицируется и собирается в одном файле libs.js

## Изображения
Картинки формата **jpg, jpeg, gif, ico, png** конвертируются в формат **webp** и сжимаются.
В конечной папке **./app/img **файлы сохраняются в двух форматах, в изначальном и webp.

## Шрифты
При загрузке в папку **./src/fonts** шрифтов формата** .ttf** (другие пока что не поддерживаются), файлы конвертируются в **.woff** и **.woff2** после чего их можно подключить с помощью миксина `@font-face`





