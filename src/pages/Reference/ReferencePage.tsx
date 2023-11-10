import { Typography, Image } from "antd";
import './ReferencePage.scss'

const { Paragraph, Title } = Typography

export default function NotesPage() {
  return (
    <div className="reference-page">
      <Title level={1}>Справка</Title>
      <Paragraph>
        Приложение Karandash позволяет создовать заметки и отображать их на календаре,
        вести учет финансов и целей.
      </Paragraph>

      <Title level={2}>Авторизация</Title>
      <Paragraph>
        Для работы с приложением пользователю нужно завести учетную запись.
        Когда пользователь без учетной записи впервые заходит в систему, он попадает на форму авторизации.
        Если у пользователя уже есть учетная запись, он может ввести логин и пароль для входа.
        Если у пользователя нет учетной записи, он должен зарегистрироваться на форме регистрации.
        Для перехода на форму регистрации пользователь должен нажать кнопку "Регистрация"
        Для этого ему нужно придумать логин и пароль и ввести.
      </Paragraph>
      <Image height={400} src="src/assets/imgs/login-form.png" />
      <Paragraph>
        Для работы с приложением пользователю нужно завести учетную запись.
        Когда пользователь без учетной записи впервые заходит в систему, он попадает на форму авторизации.
        Если у пользователя уже есть учетная запись, он может ввести логин и пароль для входа.
        Если у пользователя нет учетной записи, он должен зарегистрироваться на форме регистрации.
        Для перехода на форму регистрации пользователь должен нажать кнопку "Регистрация"
        Для этого ему нужно придумать логин и пароль и ввести.
      </Paragraph>
      <Image height={400} src="src/assets/imgs/register-form.png" />

      <Title level={2}>Навигация</Title>
      <Paragraph>
        После авторизации пользователю доступно меню навигации.
        В меню отображается аткивная вкладка.
        При клике на вкладку пользователь переходит на влкадку.
        В меню есть вкладки: заметки, финансы, цели, справка.
      </Paragraph>
      <Image src="src/assets/imgs/navbar.png" />

      <Title level={2}>Заметки</Title>
      <Title level={4}>Просмотр</Title>
      <Paragraph>
        После авторизации пользователь попадает на страницу заметок.
        На странице отображается календарь с текущим месяцем.
        В календаре в ячейках дней отображается количество заметок за данный день, если они есть.
        Сверху над календарем находятся поля выбора месяца и года.
        Справа от календаря находится блок с заметками за выбранный день.
        Чтобы выбрать день, нажните на ячейку дня на календаре.
        Заметки отображаются в виде списка. Если список пуст, выводится соответствующая иконка.
      </Paragraph>
      <Image src="src/assets/imgs/notes-calendar.png" height={400} />
      <Paragraph>
        При клике на заметку из списка появляется модальное окно с информацией о заметке:
        заголовок заметки (жирным шрифтом), дата заметки (справа от заголовка) и текст заметки (под заколовком).
      </Paragraph>
      <Image src='src/assets/imgs/note-modal.png' height={400} />
      <Title level={4}>Добавление</Title>
      <Paragraph>
        Для открытия формы добавления заметки нужно нажать на кнопку с иконкой "+" над календарем.
        Форма добавления заметки содержит поля ввода "Заголовок", "Дата", "Текст". Каждое поле является
        обязательным. Поле ввода "Дата" представлено в виде календаря, который появляется при клике на форму.
        Для добавления заметки нужно нажать кнопку "Создать". Далее появится сообщение "Заметка добавлена".
      </Paragraph>
      <Image src='src/assets/imgs/add-note-form.png' height={400} />

      <Title level={2}>Финансы</Title>
      <Title level={4}>Просмотр</Title>
      <Paragraph>
        На странице "Финансы" отображается таблица со столбцами "Месяц", "Доход", "Расход", "Разница".
        Каждому месяце в таблице соответствует суммарный доход (включающий разовые и регулярные операции),
        суммарный расход и разница суммарного дохода и суммарного расхода.
      </Paragraph>
      <Image src="src/assets/imgs/budget-table.png" height={400} />
      <Title level={4}>Добавление</Title>
      <Paragraph>
        Для добавления операции необходимо нажать на кнопку "+" над таблицей финансов.
        Далее необходимо выбрать тип операции: разовая или регулярная,
        откуда пользователь попадет на форму добавления операции.
      </Paragraph>
      <Image src="src/assets/imgs/budget-table-actions.png" />
      <Paragraph>
        На форме добавления операции находятся поля ввода "Название", "Сумма", "Доход",
        "Дата" (у разовой операции), "Период" (у регулярной операции). Поле "Дата" представлено в виде
        календаря с возможностью выбора даты. Поле "Доход" представлено ввиде флага.
        Поле "Период" представлено ввиде выбора значения из списка. Кнопка "Добавить" добавляет операцию.
        После добавления операции появится сообщение "Операция добавлена"
      </Paragraph>
      <Image src='src/assets/imgs/budget-form.png' height={400} />

      <Title level={2}>Цели</Title>
      <Title level={4}>Просмотр</Title>
      <Paragraph>
        На вкладке "Цели" находится график, показывающий накопления пользователя. 
        Оранжевой линией показываются накопления за год. Горизонтальными линиями отображатся цели
        пользователя. Справа от графика находятся подписи к целям и к финансам.
        При наведении на график появляется подсказка, на которой написаны все цели и финансы.
      </Paragraph>
      <Image src="src/assets/imgs/goals-chart.png" height={400} />
      <Title level={4}>Добавление</Title>
      <Paragraph>
        Для перехода на форму добавления цели нужно нажать на кнопку с иконкой "+".
        На форме находятся поля "Название", "Сумма", "Год", каждое поле обязательно для заполнения.
        Кнопка "Добавить" сохраняет цель. После добавления появится сообщение "Цель добавлена".
      </Paragraph>
      <Image src="src/assets/imgs/add-goal.png" height={400} />
    </div>
  )
}