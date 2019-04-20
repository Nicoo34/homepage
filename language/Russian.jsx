import React from 'react';

export const BODY = (FAQLink) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Грядущая мультиплеерная модификация для <em>Grand Theft Auto: San Andreas</em>, которая будет полностью обратно совместимой с существующей мультиплеерной модификацией, известной как <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      Это значит, что <strong>существующий клиент SA:MP и все скрипты будут работать с open.mp</strong>, а также многие ошибки в серверной части мультиплеера будут исправлены без необходимости для хаков и временных решений.
    </p>
    <p>
      Если Вы заинтересованы новостями о публичном релизе или хотите внести свой вклад в проект, пройдите в <a href="https://www.burgershot.gg/showthread.php?tid=99">эту тему на форуме</a> для изучения дальнейшей информации.
    </p>
    <h1>
      <FAQLink>FAQ</FAQLink>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>FAQ</h1>
    <hr />
    <h2>Что такое open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) - мультиплеерный мод, разрабатываемый в качестве замены San Andreas Multiplayer, созданный в ответ на проблемы с обновлениями и разработкой SA:MP. Изначальный релиз обеспечит замену только для сервера. Игроки с клиентом SA:MP смогут подключаться к этому серверу. В дальнейшем станет доступен новый клиент open.mp, что позволит выпускать больше интересных обновлений.</p>
    <hr />
    <h2>Это форк?</h2>
    <p>Нет, это полное переписывание с нуля, при котором учитываются знания и опыт, накопленные за десятилетия. Попытки создать форк SA:MP имели место ранее, но мы убеждены, что у них у всех были две основные проблемы:</p>
    <ol>
      <li>Они все были основаны на утекшем коде SA:MP. Авторы тех модов не имели законного права использовать код SA:MP, и были заведомо беззащитны, как с моральной, так и с юридической точки зрения. Мы категорически отказываемся использовать этот код. Это слегка затрудняет процесс разработки, но в долгосрочной перспективе это правильное решение.</li>
      <li>Они пытались заново изобрести слишком много всего и сразу, добавляя новые скриптовые языки, удаляя функционал и добавляя новый, или же просто изменяя что-либо несовместимым образом. Это не позволяло серверам с крупной кодовой базой и большим количеством игроков совершить переход, т.к. для этого им требовалось переписать часть своего кода (если не весь код) - это потенциально затратное дело. Мы собираемся со временем добавлять новый функционал и менять существующий, но также сосредотачиваемся на поддержке существующих серверов, позволяя им использовать наш код без нужды изменять свой.</li>
    </ol>
    <hr />
    <h2>С какой целью вы это делаете?</h2>
    <p>
      Несмотря на множественные попытки подтолкнуть вперёд развитие SA:MP официально (в виде советов, просьб и предложений помочь со стороны команды бета-тестеров), а также просьб сообщества сделать хоть что-то новое, не было абсолютно никакого прогресса в работе над модом. Было широко распространено мнение, что причиной этому простое отсутствие интереса со стороны разработчиков мода, что само по себе не проблема, но не было никакого продвижения. Вместо того, чтобы передать разработку мода заинтересованным в этом людям, основатель просто хотел уйти и утянуть всё за собой в пропасть, при этом затягивая процесс как можно дольше для минимизации усилий. Также некоторые утверждают, что причина этому - пассивный доход, но нет никаких доказательств этой версии. Несмотря на большой интерес и крупное, слаженное сообщество, он был убеждён, что моду осталось всего 1-2 года, и что сообщество, вложившее много стараний, чтобы сделать SA:MP таким, какой он есть сейчас, не заслуживает дальнейшего
      развития.
    </p>
    <br />
    <p>Мы не согласны.</p>
    <hr />
    <h2>Каково ваше отношение к Kalcor'у/SA:MP/пр.?</h2>
    <p>Мы любим SA:MP и именно поэтому мы создали этот проект - и его созданием мы обязаны Kalcor'у. За несколько лет он проделал большую работу над модом, и его вклад не следует забывать или игнорировать. Однако, open.mp был создан потому, что мы не были согласны с несколькими из его последних решений, и множественные попытки сменить вектор развития мода ни к чему не привели. Поэтому для нас, к сожалению, оставалось только одно решение: попытаться продолжить развитие SA:MP в том же направлении, но без Kalcor'а. Наши действия не направлены против него лично, и не должны восприниматься как попытка оскорбить или унизить его. Мы не собираемся терпеть оскорбления против кого-либо, независимо от того, какое отношение они имеют к open.mp; мы считаем, что обсуждения должны быть конструктивнымы и без переходов на личности.</p>
    <hr />
    <h2>Разве то, что вы делаете, не разделяет сообщество?</h2>
    <p>Мы не добиваемся этого. В идеале никакого разделения не должно требоваться вообще, но лучше отделить часть сообщества и спасти хотя бы её, чем просто наблюдать, как постепенно исчезает всё сообщество. На самом деле с того момента, как этот мод был анонсирован, помимо участников англоязычного сообщества к нам вернулись и представители многих неанглоязычных сообществ. В прошлом эти сообщества постепенно вытеснялись и закрывались, поэтому тот факт, что они появились заново, на самом деле возвращает прежний дух сообщества. Огромное количество людей были заблокированы на официальном форуме SA:MP (в некоторых случаях с удалением всех их постов), но Kalcor сам некогда утверждал, что официальный форум - это не SA:MP, это всего лишь часть SA:MP. Многие игроки и владельцы серверов никогда на нём ничего публиковали на том форуме, не говоря уже о регистрации, поэтому общение с этими людьми позволяет объединить ещё большее число участников сообщества.</p>
    <hr />
    <h2>Если это "Open" Multiplayer (пер.: "Открытый Мультиплеер"), это будет проект с открытым исходным кодом?</h2>
    <p>Да, в скором времени, таков наш план. Пока же мы стараемся обеспечить открытость в плане обратной связи и прозрачности процесса разработки (что само по себе уже прогресс) и перейти к открытию исходного кода, когда это будет возможно, как только будут решены другие значительные проблемы и удастся добиться стабильного процесса разработки.</p>
    <hr />
    <h2>Когда он будет выпущен?</h2>
    <p>Это извечный вопрос и, к сожалению, у нас такой же извечный ответ: когда он будет готов. Суть в том, что попросту невозможно оценить, сколько займёт работа над подобного рода проектом. Разработка уже велась втайне некоторое время с переменным уровнем активности, в зависимости от того, как люди были заняты. Но не беспокойтесь, работа идёт, причём идёт быстро благодаря фундаментальным архитектурным решениям (позже мы расскажем об архитектуре подробнее).</p>
    <hr />
    <h2>Как я могу помочь?</h2>
    <p>Следите за форумом. У нас есть тема специально для этих целей и мы будем обновлять её, как только появится больше работы. Несмотря на то, что о проекте стало известно немного раньше, чем планировалось, мы уже на пути к первому релизу, но это не значит, что помощь не приветствуется. Заранее спасибо за то, что интересуетесь и верите в успех проекта:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=361">
      <u>Тема о том, как можно помочь</u>
    </a>
    <hr />
    <h2>Что такое burgershot.gg?</h2>
    <p>burgershot.gg - это игровой форум, и ничего более. Многие люди связаны и с OMP, и с этим сайтом, а также некоторый прогресс в разработке OMP публикуется там, но это два независимых друг от друга проекта. У OMP нет своего форума, но OMP не является собственностью burgershot. Как только сайт OMP будет введён в строй, мод и burgershot можно будет отделить друг от друга (примерно так же, как разработка SA:MP когда-то базировалась на GTAForums, пока у мода появился собственный сайт).</p>
    <hr />
    <h2>Почему не "OpenMP"?</h2>
    <p>
      <a href="https://ru.wikipedia.org/wiki/OpenMP">Open Multiprocessing</a> - это "OpenMP", наш проект - "open.mp". Это две совершенно разные вещи.
    </p>
  </div>
);
