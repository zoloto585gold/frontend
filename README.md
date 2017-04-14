# АДАПТАЦИЯ

 - (Адаптация по шагам)[адаптация-по-шагам]
 - (Установка репозитория)[установка-репозитория]
 - (Установка окружения)[установка-окружения]
 - проверка рабочего процесса
 - ежедневная работа с репозитрием
 - работа с gulp
 - 




## Адаптация по шагам




## Установка репозитория

Сделай форк репозитория https://github.com/zoloto585gold/frontend, перейди на этот форк,
склонируй его себе локально на компьютер.

Перейди в папку локального репозитория, выполни команду
```
git remote add https://github.com/zoloto585gold/frontend.git upstream
```




## Установка окружения

Установи (NodeJS)[https://nodejs.org/en/] и запусти его, как обычную программу.

Проверим: зайди в консоль и набери команду `node -v` эта команда вернёт версию установленного NodeJS, затем команду `npm -v`, которая вернет версию NPM(Node Package Manager),
таким образом можно проверить, что "Нода" и "NPM" установлены и запущены.

В моём случае это было так:
```
$ node -v
v6.9.4

$ npm -v
3.10.10
```

Далее в консоли: перейди в папку проекта и выполни команду 
```
npm i
```
она скачивает все необходимые для текущей сборки пакеты/плагины.

Так же установи Gulp глобально:
```
npm i gulp -g
```








Репозиторий для frontend-сборки,
сниппетов,
документации по работе с версткой.



Для сборки сипользуются:
gulp(и плагины), less

Для старта работы необходимо:
 - сделать форк репозитория fronend-части проекта https://github.com/liss38/zoloto585
 - создать в форк-репозитории новую ветку, ветка именуется по названию задачи в джире(например ecom-3015)
 - сделать клон форк-репозитрия у себя локально на машине
 - устнановить Node, выполнить npm i
 - сделать изменения(выполнить свою задачу по верстке), закоммитить изменения и отпрвить в форк-репозиторий
 - отправить pullrequest из текущей(имеется ввиду ветка с выполненной задачей, например ветка ecom-3015) ветки форк-репозитория в ветку master мастер-репозитория
 - перед новой работой обновить ветку master своего форк-репозитория из ветки master мастер-репозитория

"мастер-репозиторий" - репозиторий https://github.com/liss38/zoloto585 , с которого делается форк
"форк-репозиторий" - репозиторий на твоем аккаунте гитхаба, который(репозиторий) является является копией https://github.com/liss38/zoloto585
"локальный репозиторий" - репозиторий на твоей локальной машине(комп), с которым непосредственно работаешь



Работа по верстке:
 - в папке "development" копируешь quickstart.html и переименовываешь его, в качестве имени желательно брать название своей задачи из джиры, например ecom-3015.html
 - в нем делаешь свою разметку, необходимо использовать БЭМ-нотацию, см. здесь https://github.com/liss38/zoloto585/blob/master/descriptions/Ru/workflow/less__instructions_to_work.md
 - посмотри описание к структуре less-каталога, https://github.com/liss38/zoloto585/blob/master/descriptions/Ru/workflow/less__folders.md
 - стилизация делаешь в отдельных less-файлах, по принципу "один БЭМ-блок = один less-файл", эти less-файлы размещаешь в папке pages/имя_страницы_шаблона/, например для каталога папка стилей это less/pages/catalog/, для главной страницы less/pages/index/, ...
 - в случае если папки нужной страницы еще нет, создаешь эту папку, например less/pages/store-card, и в нее добавляешь свои less-файлы
 - less/scaffolding - папка в которой отдельные less-файлы объединяются по группам, импорт-листы
 - для подключения less-файлов в результирующий z585_all.min.css в случае когда прозводилась верстка блоков уже сущетвующего раздела, например раздела "catalog", находишь соответствующий импорт-лист, т.е. pages__catalog.less, открываешь в редакторе и добавляешь свои less-файлы с помощью команды @import "путь к лесс файлу"
 - если производилась верстка нового раздела сайта, т.е. в корне папки less/pages/ была создана папка для нового раздела(например папка less/pages/store-card), тогда в папке less/scaffolding нужно создать импорт-лист pages__store-card.less, в которм уже подключать фless-файлы стилей
 - z585_all.min.css собирается с помощью команд gulp z585-css:scaff, gulp z585-css:build, важно соблюдать последовательность сначала gulp z585-css:scaff, затем gulp z585-css:build, затем в браузере проверить изменения(правильно применились стили или нет)
 - в случае, когда создавлся импорт-лист в папке less/scaffolding для нового раздела сайта, необходимо его добавить в gulpfile.js в массив z585AllScaffoldingList, к группе элементов "// стили шаблонов страниц (постранично)"
 - В локальной версии: для создание файла z585_all.min.css необходимо раскомментировать строку "var dev_or_prod = '_2dev';" в gulpfile.js
 - для продакшн версии и дев-серверов строка "var dev_or_prod = '_2dev';" должна быть закомментирована


Поскольку исчерпывающих мануалов и видео-инструкций сейчас нету,
а структура папки development(кроме структуры каталога less) будет меняться, 
могут возникнуть проблемы и недоразумения, поэтому при старте работы добавься ко мне в скайп: liss38, (Максим)
я отвечу на вопросы и добавлю к сборке конструктивные советы, которые ты предложишь