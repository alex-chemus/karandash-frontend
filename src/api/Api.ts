/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserCredsDto {
  /**
   * Логин пользователя
   * @example "admin"
   */
  login: string;
  /**
   * Пароль пользователя
   * @example "qwerty"
   */
  password: string;
}

export interface TokenDto {
  /**
   * auth token
   * @example "token"
   */
  token: string;
}

export interface CreateNoteDto {
  /**
   * Заголовок заметки
   * @example "Заголовок"
   */
  title: string;
  /**
   * Дата заметки
   * @example "yyyy-MM-dd"
   */
  date: string;
  /**
   * Текст заметки
   * @example "Текст"
   */
  text: string;
}

export interface Note {
  /**
   * ID заметки
   * @example "1"
   */
  id: number;
  /**
   * Заголовок заметки
   * @example "Заголовок"
   */
  title: string;
  /**
   * Дата создания заметки
   * @example "yyyy-MM-dd"
   */
  date: string;
  /**
   * Текст заметки
   * @example "Lorem ispum"
   */
  text: string;
  /**
   * ID пользователя
   * @example "1"
   */
  userId: number;
}

export interface DateRangeDto {
  /**
   * Начало диапазона
   * @example "yyyy-MM-dd"
   */
  start: string;
  /**
   * Конец диапазона
   * @example "yyyy-MM-dd"
   */
  end: string;
}

export interface IdDto {
  /**
   * ID
   * @example 1
   */
  id: number;
}

export interface SingularFinancialOperation {
  /**
   * ID записи
   * @example "1"
   */
  id: number;
  /**
   * Сумма
   * @example "1000"
   */
  sum: number;
  /**
   * Доход/расход
   * @example "true"
   */
  isIncome: boolean;
  /**
   * Дата
   * @example "YYYY-MM-DD"
   */
  date: string;
  /**
   * Название
   * @example "Стипа)))"
   */
  name: string;
  /**
   * ID пользователя
   * @example "1"
   */
  userId: number;
  /**
   * ID заметки
   * @example "1"
   */
  noteId: number;
}

export interface NoteViewDto {
  /**
   * ID заметки
   * @example "1"
   */
  id: number;
  /**
   * Заголовок заметки
   * @example "Заголовок"
   */
  title: string;
  /**
   * Дата заметки
   * @example "yyyy-MM-dd"
   */
  date: string;
  /**
   * Текст заметки
   * @example "Текст"
   */
  text: string;
  /**
   * Разовые единичные операции
   * @example {}
   */
  singularFinancialOperations: SingularFinancialOperation[];
  /**
   * ID пользователя
   * @example "1"
   */
  userId: number;
}

export interface EditNoteDto {
  /**
   * ID заметки
   * @example "1"
   */
  id: number;
  /**
   * Заголовок заметки
   * @example "Заголовок"
   */
  title: string;
  /**
   * Дата заметки
   * @example "yyyy-MM-dd"
   */
  date: string;
  /**
   * Текст заметки
   * @example "Текст"
   */
  text: string;
}

export interface AddSingularFinancialOperationDto {
  /**
   * Сумма
   * @example "1000"
   */
  sum: number;
  /**
   * Доход/расход
   * @example "true"
   */
  isIncome: boolean;
  /**
   * Дата
   * @example "YYYY-MM-DD"
   */
  date: string;
  /**
   * Название
   * @example "Стипа)))"
   */
  name: string;
  /**
   * ID заметки
   * @example 1
   */
  noteId?: number;
}

export interface AddRegularFinancialOperationDto {
  /**
   * Сумма
   * @example "1000"
   */
  sum: number;
  /**
   * Доход/расход
   * @example "true"
   */
  isIncome: boolean;
  /**
   * ID периода
   * @example "1"
   */
  periodId: number;
  /**
   * Название
   * @example "Стипа)))"
   */
  name: string;
}

export interface RegularFinancialOperation {
  /**
   * ID записи
   * @example "1"
   */
  id: number;
  /**
   * Сумма
   * @example "1000"
   */
  sum: number;
  /**
   * Доход/расход
   * @example "true"
   */
  isIncome: boolean;
  /**
   * Название
   * @example "Стипа)))"
   */
  name: string;
  /**
   * ID период
   * @example "1"
   */
  periodId: number;
  /**
   * ID пользователя
   * @example "1"
   */
  userId: number;
}

export interface GetYearSummaryDto {
  /**
   * Год
   * @example 2023
   */
  year: number;
}

export interface MonthSummaryDto {
  /**
   * Месяц (1-12)
   * @example "1"
   */
  month: number;
  /**
   * Доход
   * @example "1000"
   */
  income: number;
  /**
   * Расход
   * @example "1000"
   */
  expense: number;
  /**
   * Сальдо
   * @example "1000"
   */
  diff: number;
}

export interface Period {
  /**
   * ID периода
   * @example "1"
   */
  id: number;
  /**
   * Период
   * @example "Месяц"
   */
  title: string;
}

export interface GetMonthOperations {
  /**
   * Год
   * @example "2023"
   */
  year: number;
  /**
   * Месяц (1-12)
   * @example "1"
   */
  month: number;
}

export interface OperationsListItem {
  /**
   * id
   * @example "1"
   */
  id: number;
  /**
   * Доход/расход
   * @example true
   */
  isIncome: boolean;
  /**
   * Сумма
   * @example "1000"
   */
  sum: number;
  /**
   * Название
   * @example "Название"
   */
  name: string;
  /**
   * Тип операции
   * @example "Тип операции"
   */
  operationType: string;
}

export interface AddGoalDto {
  /**
   * Название
   * @example "На путешествие"
   */
  name: string;
  /**
   * Сумма
   * @example "100000"
   */
  sum: number;
  /**
   * Год
   * @example "2023"
   */
  year: number;
}

export interface Goal {
  /**
   * ID цели
   * @example "1"
   */
  id: number;
  /**
   * Название
   * @example "На путешествие"
   */
  name: string;
  /**
   * Сумма
   * @example "100000"
   */
  sum: number;
  /**
   * Год
   * @example "2023"
   */
  year: number;
  /**
   * ID пользователя
   * @example 1
   */
  userId: number;
}

export interface YearDto {
  /**
   * Год
   * @example "2023"
   */
  year: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title karandash
 * @version 1.0.0
 * @contact
 *
 * karandash
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name Login
     * @summary Вход в аккаунт
     * @request POST:/auth/login
     */
    login: (data: UserCredsDto, params: RequestParams = {}) =>
      this.request<TokenDto, any>({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name Register
     * @summary Регистрация пользователя
     * @request POST:/auth/register
     */
    register: (data: UserCredsDto, params: RequestParams = {}) =>
      this.request<TokenDto, any>({
        path: `/auth/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  notes = {
    /**
     * No description
     *
     * @tags Notes
     * @name CreateNote
     * @summary Создать заметку
     * @request POST:/notes/create-note
     * @secure
     */
    createNote: (data: CreateNoteDto, params: RequestParams = {}) =>
      this.request<Note, any>({
        path: `/notes/create-note`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notes
     * @name GetNotesInDateRange
     * @summary Вывести заметки за указаный период
     * @request POST:/notes/get-notes-in-date-range
     * @secure
     */
    getNotesInDateRange: (data: DateRangeDto, params: RequestParams = {}) =>
      this.request<Note[], any>({
        path: `/notes/get-notes-in-date-range`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notes
     * @name ViewNote
     * @summary Вернуть заметку по ID
     * @request POST:/notes/view-note
     * @secure
     */
    viewNote: (data: IdDto, params: RequestParams = {}) =>
      this.request<NoteViewDto, any>({
        path: `/notes/view-note`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notes
     * @name DeleteNoteById
     * @summary Удалить заметку по ID
     * @request POST:/notes/delete-note-by-id
     * @secure
     */
    deleteNoteById: (data: IdDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/notes/delete-note-by-id`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notes
     * @name EditNote
     * @summary Редактировать заметку
     * @request POST:/notes/edit-note
     * @secure
     */
    editNote: (data: EditNoteDto, params: RequestParams = {}) =>
      this.request<Note, any>({
        path: `/notes/edit-note`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  financialOperations = {
    /**
     * No description
     *
     * @tags Financial operations
     * @name AddSingularFinancialOperation
     * @summary Добавить разовый доход/расход
     * @request POST:/financial-operations/add-singular-financial-operation
     * @secure
     */
    addSingularFinancialOperation: (data: AddSingularFinancialOperationDto, params: RequestParams = {}) =>
      this.request<SingularFinancialOperation, any>({
        path: `/financial-operations/add-singular-financial-operation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Financial operations
     * @name AddRegularFinancialOperation
     * @summary Добавить регулярный доход/расход
     * @request POST:/financial-operations/add-regular-financial-operation
     * @secure
     */
    addRegularFinancialOperation: (data: AddRegularFinancialOperationDto, params: RequestParams = {}) =>
      this.request<RegularFinancialOperation, any>({
        path: `/financial-operations/add-regular-financial-operation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Financial operations
     * @name GetAggregatedYearSummary
     * @summary Итоговые данные за год с накоплением
     * @request POST:/financial-operations/get-aggregated-year-summary
     * @secure
     */
    getAggregatedYearSummary: (data: GetYearSummaryDto, params: RequestParams = {}) =>
      this.request<MonthSummaryDto[], any>({
        path: `/financial-operations/get-aggregated-year-summary`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Financial operations
     * @name GetPlainYearSummary
     * @summary Итоговые данные за год
     * @request POST:/financial-operations/get-plain-year-summary
     * @secure
     */
    getPlainYearSummary: (data: GetYearSummaryDto, params: RequestParams = {}) =>
      this.request<MonthSummaryDto[], any>({
        path: `/financial-operations/get-plain-year-summary`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Financial operations
     * @name GetPeriods
     * @summary Периоды регулярный операций
     * @request GET:/financial-operations/get-periods
     * @secure
     */
    getPeriods: (params: RequestParams = {}) =>
      this.request<Period[], any>({
        path: `/financial-operations/get-periods`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Financial operations
     * @name GetAllOperationsInMonth
     * @summary Все фин. операции за указанный месяц
     * @request POST:/financial-operations/get-operations-in-month
     * @secure
     */
    getAllOperationsInMonth: (data: GetMonthOperations, params: RequestParams = {}) =>
      this.request<OperationsListItem[], any>({
        path: `/financial-operations/get-operations-in-month`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Financial operations
     * @name GetOperationsByNote
     * @summary Фин. операции по заметке
     * @request POST:/financial-operations/get-operations-by-note
     * @secure
     */
    getOperationsByNote: (data: IdDto, params: RequestParams = {}) =>
      this.request<SingularFinancialOperation[], any>({
        path: `/financial-operations/get-operations-by-note`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Financial operations
     * @name DeleteSingularOperation
     * @summary Удалить разовую операцию
     * @request POST:/financial-operations/delete-singular-operation
     * @secure
     */
    deleteSingularOperation: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/financial-operations/delete-singular-operation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  goals = {
    /**
     * No description
     *
     * @tags Goals
     * @name AddGoal
     * @summary Добавить цель
     * @request POST:/goals/add-goal
     * @secure
     */
    addGoal: (data: AddGoalDto, params: RequestParams = {}) =>
      this.request<Goal, any>({
        path: `/goals/add-goal`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Goals
     * @name GetGoals
     * @summary Показать цели
     * @request POST:/goals/get-goals
     * @secure
     */
    getGoals: (data: YearDto, params: RequestParams = {}) =>
      this.request<Goal[], any>({
        path: `/goals/get-goals`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
