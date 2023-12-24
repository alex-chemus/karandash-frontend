# Karandash Frontend
Приложение, разработанное как pet-проект для ИПР. Приложение реализует учет заметок и финансовых операций

## Основные функции
- Просмотр заметок в календаре, добавление/редактирование/удаление заметок
- Форма добавления заметок, включающая в себя форму добавления новых фин. операций, прикрепленных к заметке
- Просмотр финансовых операций в виде многоуровневой таблицы, добавление/редактирование/удаление заметок
- Добавление финансовых целей и просмотр целей на графике с финансовыми итогами

## Запуск
```bash
npm run dev
```
### .env.example
```.env
VITE_API_HOST="http://2148793-twk8saas.twc1.net"
```

## Swagger
```bash
npm run api:generate
```

## E2E
```bash
npm run test:e2e
```
