const API = [
    {
        id:1,
        title: "GLOBAL_FINANCES.GLOBAL_ORDERS", 
        table: "GLOBAL_FINANCES.GLOBAL_ORDERS",
        columns: "order_id, user, payment, cash", 
        key:"order_id", 
        description:"Cada Fila es cada orden realizada en la app y sus carácteristicas principales. Usuario, hora de creación, hora de cierre, tienda, valor del pedido entre otras, en total son 67 Columnas que describen la orden en terminos generales", 
        query:" <br> SELECT  COUNTRY, VERTICAL, COUNT(DISTINCT ORDER_ID) AS ORDERS ,SUM(GMV_USD) AS GMV_DOLARS <br> FROM GLOBAL_FINANCES.GLOBAL_ORDERS <br> WHERE DATE_ORDER_CREATED BETWEEN '2022-01-01' AND CURRENT_DATE AND COUNT_TO_GMV <br> GROUP BY 1,2;",
        tags: "orders, gmv, brand, prime, mz",
        owner : "Daniel Santamaría Álvarez"
    },
    {
        id:2,
        title: "GLOBAL_FINANCES.TBL_DIM_GEOGRAPHY_T1", 
        table: "GLOBAL_FINANCES.TBL_DIM_GEOGRAPHY_T1",
        columns: "order_id, user, payment, cash", 
        key:"SK_GEOGRAPHY", 
        description:"Contiene la descripción de Cada Microzona activa en la app", 
        query:" <br> SELECT  CITY_NAME, COUNT(DISTINCT ORDER_ID) AS ORDERS ,SUM(GMV_USD) AS GMV_DOLARS  <br> FROM GLOBAL_FINANCES.GLOBAL_ORDERS O LEFT JOIN GLOBAL_FINANCES.TBL_DIM_GEOGRAPHY_T1 G ON O.MICROZONE_ID = G.MICROZONE_CODE  <br> AND G.COUNTRY_INDEX=O.COUNTRY <br> WHERE DATE_ORDER_CREATED BETWEEN '2022-01-01' AND CURRENT_DATE AND COUNT_TO_GMV  <br> GROUP BY 1;", 
        tags: "orders, gmv, brand, prime, mz",
        owner : "Daniel Santamaría Álvarez"
    },
    {
        id:3,
        title: "GLOBAL_GROWTH.USERS_PARAMETRS", 
        table: "GLOBAL_GROWTH.USERS_PARAMETRS",
        columns: "order_id, user, payment, cash", 
        key:"USER_ID", 
        description:"Finances Cada fila describe las carácteristicas principes de todos los usuarios registrado en la app.", 
        query:" <br> SELECT PAIS, STATE_TURBO,TURBO_COVERAGE,COUNT(DISTINCT  USER_ID) AS USERS <br> FROM global_growth.users_parameters  <br> GROUP BY 1,2,3;",
        tags: "mz, city, country",
        owner : "Felipe Celis"
    },
    {
        id:4,
        title: "GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2", 
        table: "GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2",
        columns: "order_id, user, payment, cash", 
        key:"ID", 
        description:"Cada fila describe las características principales de todos los usuarios registrado en la app.", 
        query:" <br> SELECT COUNTRY, IS_STUDENT, HAS_CHILDREN, COUNT(DISTINCT ID)  AS USERS  <br> FROM GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2  <br> GROUP BY 1,2,3;",
        tags: "all_users, user_level, segmentation, quality",
        owner : "Daniel Santamaría Álvarez"
    },
    {
        id:5,
        title: "GLOBAL_FINANCES.GLOBAL_ORDERS" ,
        table: "GLOBAL_FINANCES.GLOBAL_ORDERS" ,
        columns: `COUNTRY,
        ORDER_ID,
        APPLICATION_USER_ID,
        CREATED_AT,
        DATE_ORDER_CREATED,
        HOUR_ORDER_CREATED,
        CLOSED_AT,
        DATE_ORDER_CLOSED,
        HOUR_ORDER_CLOSED,
        PLACE_AT,
        UPDATED_AT,
        TOTAL_DISCOUNT,
        TOTAL_DISCOUNT_USD,
        TOTAL_VALUE,
        TOTAL_VALUE_USD,
        TIP,
        TIP_USD,
        GMV,
        GMV_USD,
        FAKE_GMV,
        FAKE_GMV_USD,
        ORGANIC,
        SERVICE_COST,
        SERVICE_COST_USD,
        WHIM,
        COUPON_CODE,
        PAYMENT_METHOD,
        BIN,
        CARD_BRAND,
        CARD_TYPE,
        CARD_CATEGORY,
        ORDER_STATE,
        STATE_TYPE,
        IS_SUBSCRIPTION,
        COUNT_TO_GMV,
        COUNT_TO_BURN,
        CHARGEBACK_AMOUNT,
        RECENCY_ALL,
        RECENCY,
        ORDER_TYPE_ALL,
        ORDER_TYPE,
        LAT,
        LNG,
        MICROZONE_ID,
        MICROZONE_NAME,
        DEVICE_SCORE,
        OS,
        DEVICE,
        REGISTERED_AT,
        FIRST_ORDER_AT_ALL,
        FIRST_ORDER_AT,
        GMV_SCORE,
        BRAND_ID,
        BRAND_NAME,
        BRAND_GROUP,
        BRAND_GROUP_ID,
        STORE_ID,
        STORE_NAME,
        STORE_TYPE,
        VERTICAL_GROUP,
        VERTICAL_SUB_GROUP,
        VERTICAL,
        TYPE_PRIME_SUBSCRIPTION,
        TYPE_PRIME_SUBSCRIPTION_DETAIL,
        PLAN_NAME,
        CREATED_AT_UTC,
        LOADED_AT` ,
        key: "ORDER_ID" ,
        description: "Esta tabla contiene todas las ordenes generadas en la aplicación. Cada Fila Representa una orden y sus carácteristicas principales. Por ejemplo, cuando fue creada, cuando fue entregada, si cuenta el GMV o no. Su valor total, el valor en descuentos, su latitud y longitud, en que tienda, metodo de pago entre muchas otras." ,
        query: `"SELECT DATE_TRUNC('MONTH',CREATED_AT::DATE) AS MES
        <br> ,COUNTRY
        <br> ,COUNT(DISTINCT ORDER_ID) AS ORDERS
        <br> ,SUM(GMV_USD) AS GMV
        <br> FROM GLOBAL_GROWTH.TBL_CO_ORDERS_GROWTH
        <br> WHERE CREATED_AT::DATE BETWEEN '2021-01-01' AND CURRENT_DATE-1
        <br> AND COUNT_TO_GMV
        <br> GROUP BY 1,2
        ;"` ,
        tags: "orders, gmv, brand, prime, mz, global", 
        owner: "Daniel Santamaría Álvarez" 
    },
    {
        id:6,
        title: "GLOBAL_GROWTH.TBL_RCT_USERS_V2" ,
        table: "GLOBAL_GROWTH.TBL_RCT_USERS_V2" ,
        columns: `COUNTRY,
        USER_ID,
        CURRENT_SQUAD,
        TIER_RCT,
        RECENCY,
        IN_REACTIVATION,
        BIG_WHALES,
        RESURECTION,
        VIEW_HOME_RECENCY,
        MAX_AMOUNT,
        EXCLUSION,
        RC_CHARGES,
        SUNSET_POLICY,
        EXCLUSION_CHARGES,
        OS,
        UNIVERSAL_CONTROL_GROUP,
        RCT_CONTROL_GROUP,
        RESURECTION_CONTROL_GROUP,
        SIFT_BLOCKED,
        BLOCKED,
        CC_BLOCKED,
        SMS_BLOCKED,
        PUSH_BLOCKED,
        REAL_EXCLUSION,
        EXCLUSION_ORIGIN,
        ORDERS_RANGE,
        RECENCY_RANGE,
        RATIO_RANGE,
        HAS_CC_ORDER,
        LAT,
        LNG,
        MICROZONE_ID,
        MICROZONE_NAME,
        CITY,
        CITY_ID,
        CPO_ID,
        ORGANIC,
        LAST_ACT` ,
        key: "USER_ID" ,
        description: "Esta tabla trae todas las caráctetisticas principales de los usuarios de rappi que han hecho por lo menos una orden. Contiene" ,
        query: `"SELECT COUNTRY,CURRENT_SQUAD,IN_REACTIVATION, COUNT(DISTINCT USER_ID) AS USERS
        <br>FROM GLOBAL_GROWTH.TBL_RCT_USERS_V2
        <br>GROUP BY 1,2,3;
        "` ,
        tags: "users, orden, country" ,
        owner: "Felipe Celis"
    },
    {
        id:7,
        title: "GLOBAL_GROWTH.TBL_RCT_USERS_HISTORIC_DAILY" ,
        table: "GLOBAL_GROWTH.TBL_RCT_USERS_HISTORIC_DAILY" ,
        columns: `COUNTRY,
        USER_ID,
        RECENCY,
        TIER_RCT,
        EXCLUSION,
        BIG_WHALES,
        RESURECTION,
        CONTROL,
        DATE_SEG,
        REAL_EXCLUSION,
        VIEW_HOME_RECENCY` ,
        key: "NULL" ,
        description: "Esta tabla trae el historico de todos los usuarios de rappi, con una orden o más en la app. Es día vencido. Como su nombr elo indica es diaría." ,
        query: `"SELECT H.COUNTRY,H.DATE_SEG+1 AS FECHA, H.TIER_RCT, H.RESURECTION
        <br>, CASE WHEN H.RECENCY > 120  AND RIGHT (H.USER_ID,2) IN (15,35,55,75,95) THEN 'RESURECTION RECENCY'
        <br>       WHEN H.RECENCY BETWEEN 27 AND 120 AND RIGHT (H.USER_ID,2) IN  (06,26,46,66,86) THEN 'EARLY REACTIVATION' 
        <br>       END AS REACTIVATION_RECENCY
        <br>, COUNT(DISTINCT H.USER_ID) AS BASE
        <br>, COUNT(DISTINCT O.APPLICATION_USER_ID) AS REACTIVACION
        <br>, SUM(GMV_USD) AS GMV
        <br>FROM GLOBAL_GROWTH.TBL_RCT_USERS_HISTORIC_V2 H
        <br>LEFT JOIN (SELECT COUNTRY, APPLICATION_USER_ID, CREATED_AT::DATE AS FECHA, GMV_USD, ORDER_TYPE, RECENCY
        <br>            FROM GLOBAL_FINANCES.GLOBAL_ORDERS
        <br>            WHERE COUNT_TO_GMV=TRUE
        <br>            AND CREATED_AT::DATE >= DATE_TRUNC('MONTH',CURRENT_DATE-1)
        <br>            AND RIGHT(APPLICATION_USER_ID,2) IN (06,26,46,66,86,15,35,55,75,95)
        <br>            AND ORDER_TYPE ='REACTIVATION') O
        <br>ON H.COUNTRY=O.COUNTRY AND H.USER_ID=O.APPLICATION_USER_ID AND O.FECHA=H.DATE_SEG+1
        <br>  WHERE H.DATE_SEG+1>= DATE_TRUNC('MONTH',CURRENT_DATE-1)
        <br>  AND (H.RECENCY > 120  AND RIGHT (H.USER_ID,2) IN (15,35,55,75,95) OR H.RECENCY BETWEEN 27 AND 120 AND RIGHT (H.USER_ID,2) IN  (06,26,46,66,86)) 
        <br>  AND H.RECENCY > 27
        <br>GROUP BY 1,2,3,4,5"` ,
        tags: "join, left join, case, country, order" ,
        owner: "Felipe Celis"
    },
    {
        id:8,
        title: "GLOBAL_GROWTH.USERS_PARAMETERS" ,
        table: "GLOBAL_GROWTH.USERS_PARAMETERS" ,
        columns: `PAIS,
        USER_ID,
        SEGMENT,
        FIRST_NAME,
        LAST_NAME,
        USER_GENDER,
        AGE,
        REGISTERED_AT,
        BIRTH_DATE,
        IS_PRIME,
        PRIME_SUBSCRIPTION,
        CATEGORY_REWARDS,
        LAST_OS,
        DEVICE,
        BLOCKED,
        PARENT,
        VEGG_FOOD_LOVER,
        HEALTHY_FOOD,
        COFFEE_LOVERS,
        LIQUOR_LOVER,
        PETS_LOVER,
        CONTROL_SQUADS,
        ACQUISITION_SCORE,
        EARLY_SCORE,
        ULTRA_SCORE,
        REFERRALS_ACTIVE_COUPONS,
        REF_REFCODE,
        REF_REFCODE_PAYOUT,
        REF_REFCODE_GIVE_SHIPPING,
        RCT_REFCODE,
        RCT_REFCODE_PAYOUT,
        RCT_REFCODE_GIVE_SHIPPING,
        ETAS_BANNER,
        SUBSCRIBED_STATUS_SMS,
        SUBSCRIBED_STATUS_EMAIL,
        SUBSCRIBED_STATUS_PUSH,
        SUBSCRIBED_STATUS_INAPP,
        SUBSCRIBED_STATUS_WHATSAPP,
        EMAIL_OPEN,
        EMAIL_CLICK,
        PUSH_OPEN_CALSIF,
        LAST_DATA_CHECK_AT,
        CREDIT_CARD,
        PAYMENT_METHODS,
        CC_BLOCKED,
        SIFT_BLOCKED,
        HAVE_PREMIUM_CC,
        BIN_NUMBER,
        ACCOUNTS_PER_DEVICE,
        GROUP_30,
        GROUP_90,
        GROUPS,
        VERTICALES,
        VERTICALES_30,
        VERTICALES_90,
        TOP_FIVE_CITIES,
        LAST_CITY_ID,
        TOP_CITY_ID,
        TOP_CITY,
        MICROZONE_ID,
        MICROZONE_NAME,
        LAST_ZONE_ID,
        TOP_ZONE_ID,
        LAST_ORDER_LAT,
        LAST_ORDER_LNG,
        LAST_ORDER_CITY,
        LAST_CITY_CATEGORY,
        ACTIVE_COUNTRY,
        TURBO_COVERAGE,
        NEARBY_STORE_ID_TURBO,
        LAST_CELL_TOKEN,
        DELIVERY_COST_SHIPPING,
        LAST_ACTION_PRIME,
        RENOVATE_PRIME,
        PRIME_ENDS_AT,
        PRIME_PAYMENT_TYPE,
        PRIME_SHIPPING_SAVINGS_30D,
        PRIME_SHIPPING_SAVINGS_365D,
        PRIME_SHIPPING_SAVINGS_LIFETIME,
        PRIME_SERVICE_FEE_SAVINGS_30D,
        PRIME_SERVICE_FEE_SAVINGS_365D,
        PRIME_SERVICE_FEE_SAVINGS_LIFETIME,
        PRIME_TOTAL_SAVINGS_30D,
        PRIME_TOTAL_SAVINGS_365D,
        PRIME_TOTAL_SAVINGS_LIFETIME,
        PRIME_POTENTIAL_SHIPPING_SAVINGS_30D,
        PRIME_POTENTIAL_SHIPPING_SAVINGS_365D,
        PRIME_POTENTIAL_SHIPPING_SAVINGS_LIFETIME,
        PRIME_POTENTIAL_SERVICE_FEE_SAVINGS_30D,
        PRIME_POTENTIAL_SERVICE_FEE_SAVINGS_365D,
        PRIME_POTENTIAL_SERVICE_FEE_SAVINGS_LIFETIME,
        PRIME_POTENTIAL_TOTAL_SAVINGS_30D,
        PRIME_POTENTIAL_TOTAL_SAVINGS_365D,
        PRIME_POTENTIAL_TOTAL_SAVINGS_LIFETIME,
        PRIME_SEGMENT,
        PRIME_TRIAL,
        PRIME_PLAN_DAYS,
        FIRST_ORDER_AT,
        LAST_ORDER,
        TOTAL_ORDERS,
        AOV,
        TICKET_CUMULATIVE,
        GMV_CUMULATIVE,
        MEDIAN_FREQ_RAPPI,
        TOTAL_ORDERS_30,
        AOV_30,
        TOTAL_ORDERS_90,
        AOV_90,
        STATE_RAPPI,
        STATE_REST,
        STATE_SUPER,
        STATE_EXPRESS,
        STATE_TURBO,
        STATE_FARMACIA,
        STATE_LICORES,
        STATE_COURRIER,
        STATE_ULTRASERVICIO,
        STATE_WHIM,
        STATE_ECOMMERCE,
        STATE_FASHION,
        STATE_HOME,
        STATE_PETS,
        STATE_TECH,
        STATE_BABIES_KIDS,
        STATE_SERVICES,
        STATE_TRAVEL,
        STATE_SOAT,
        NUEVO_REST,
        NUEVO_SUPER,
        NUEVO_EXPRESS,
        NUEVO_TURBO,
        NUEVO_FARMACIA,
        NUEVO_LICORES,
        NUEVO_COURRIER,
        NUEVO_ULTRASERVICIO,
        NUEVO_WHIM,
        ACTIVO_REST,
        ACTIVO_SUPER,
        ACTIVO_EXPRESS,
        ACTIVO_TURBO,
        ACTIVO_FARMACIA,
        ACTIVO_LICORES,
        ACTIVO_COURRIER,
        ACTIVO_ULTRASERVICIO,
        ACTIVO_WHIM,
        LAST_ORDER_REST,
        LAST_ORDER_SUPER,
        LAST_ORDER_EXPRESS,
        LAST_ORDER_TURBO,
        LAST_ORDER_FARMACIA,
        LAST_ORDER_LICORES,
        LAST_ORDER_COURRIER,
        LAST_ORDER_ULTRASERVICIO,
        LAST_ORDER_WHIM,
        LAST_ORDER_ECOMMERCE,
        LAST_ORDER_BABIES_KIDS,
        LAST_ORDER_FASHION,
        LAST_ORDER_HOME,
        LAST_ORDER_PETS,
        LAST_ORDER_SERVICES,
        LAST_ORDER_SOAT,
        LAST_ORDER_TECH,
        LAST_ORDER_TRAVEL,
        FIRST_ORDER_REST,
        FIRST_ORDER_SUPER,
        FIRST_ORDER_EXPRESS,
        FIRST_ORDER_TURBO,
        FIRST_ORDER_FARMACIA,
        FIRST_ORDER_LICORES,
        FIRST_ORDER_COURRIER,
        FIRST_ORDER_ULTRASERVICIO,
        FIRST_ORDER_WHIM,
        FIRST_ORDER_ECOMMERCE,
        FIRST_ORDER_BABIES_KIDS,
        FIRST_ORDER_FASHION,
        FIRST_ORDER_HOME,
        FIRST_ORDER_PETS,
        FIRST_ORDER_SERVICES,
        FIRST_ORDER_SOAT,
        FIRST_ORDER_TECH,
        FIRST_ORDER_TRAVEL,
        ORDERS_REST,
        ORDERS_SUPER,
        ORDERS_EXPRESS,
        ORDERS_TURBO,
        ORDERS_FARMACIA,
        ORDERS_LICORES,
        ORDERS_COURRIER,
        ORDERS_ULTRASERVICIO,
        LAST_VERTICAL,
        LAST_ORDER_ORGANIC,
        MAX_TKT,
        MIN_TKT,
        MAX_TKT_REST,
        AVG_TKT_REST,
        MIN_TKT_REST,
        MAX_TKT_SUPER,
        AVG_TKT_SUPER,
        MIN_TKT_SUPER,
        MAX_TKT_EXPRESS,
        AVG_TKT_EXPRESS,
        MIN_TKT_EXPRESS,
        MAX_TKT_FARMACIA,
        AVG_TKT_FARMACIA,
        MIN_TKT_FARMACIA,
        MAX_TKT_LICORES,
        AVG_TKT_LICORES,
        MIN_TKT_LICORES,
        MAX_TKT_COURRIER,
        AVG_TKT_COURRIER,
        MIN_TKT_COURRIER,
        MAX_TKT_ULTRASERVICIO,
        AVG_TKT_ULTRASERVICIO,
        MIN_TKT_ULTRASERVICIO,
        TKT_CUMULATIVE_REST,
        TKT_CUMULATIVE_SUPER,
        TKT_CUMULATIVE_EXPRESS,
        TKT_CUMULATIVE_FARMACIA,
        TKT_CUMULATIVE_LICORES,
        TKT_CUMULATIVE_COURRIER,
        TKT_CUMULATIVE_ULTRASERVICIO,
        TKT_CUMULATIVE_WHIM,
        GMV_CUMULATIVE_REST,
        GMV_CUMULATIVE_SUPER,
        GMV_CUMULATIVE_EXPRESS,
        GMV_CUMULATIVE_FARMACIA,
        GMV_CUMULATIVE_LICORES,
        GMV_CUMULATIVE_COURRIER,
        GMV_CUMULATIVE_ULTRASERVICIO,
        GMV_CUMULATIVE_WHIM,
        MEDIAN_FREQ_REST,
        MEDIAN_FREQ_SUPER,
        MEDIAN_FREQ_EXPRESS,
        MEDIAN_FREQ_FARMACIA,
        MEDIAN_FREQ_LICORES,
        MEDIAN_FREQ_COURRIER,
        MEDIAN_FREQ_ULTRASERVICIO,
        ORDERS_1,
        ORDERS_REST_1,
        ORDERS_SUPER_1,
        ORDERS_EXPRESS_1,
        ORDERS_TURBO_1,
        ORDERS_FARMACIA_1,
        ORDERS_LICORES_1,
        ORDERS_7,
        ORDERS_REST_7,
        ORDERS_SUPER_7,
        ORDERS_EXPRESS_7,
        ORDERS_TURBO_7,
        ORDERS_FARMACIA_7,
        ORDERS_LICORES_7,
        ORDERS_REST_30,
        ORDERS_SUPER_30,
        ORDERS_EXPRESS_30,
        ORDERS_TURBO_30,
        ORDERS_FARMACIA_30,
        ORDERS_LICORES_30,
        ORDERS_COURRIER_30,
        ORDERS_ULTRASERVICIO_30,
        AVG_TKT_REST_30,
        AVG_TKT_SUPER_30,
        AVG_TKT_EXPRESS_30,
        AVG_TKT_FARMACIA_30,
        AVG_TKT_LICORES_30,
        AVG_TKT_COURRIER_30,
        AVG_TKT_ULTRASERVICIO_30,
        ORDERS_REST_90,
        ORDERS_SUPER_90,
        ORDERS_EXPRESS_90,
        ORDERS_TURBO_90,
        ORDERS_FARMACIA_90,
        ORDERS_LICORES_90,
        ORDERS_COURRIER_90,
        ORDERS_ULTRASERVICIO_90,
        AVG_TKT_REST_90,
        AVG_TKT_SUPER_90,
        AVG_TKT_EXPRESS_90,
        AVG_TKT_FARMACIA_90,
        AVG_TKT_LICORES_90,
        AVG_TKT_COURRIER_90,
        AVG_TKT_ULTRASERVICIO_90,
        PRODUCT_TYPES_RAPPI,
        PRODUCT_TYPES_REST,
        PRODUCT_TYPES_SUPER,
        PRODUCT_TYPES_EXPRESS,
        PRODUCT_TYPES_FARMACIA,
        PRODUCT_TYPES_LICORES,
        TAGS_REST,
        TAG_IDS,
        CORRIDORS,
        CORRIDORS_SUPER,
        CORRIDORS_EXPRESS,
        CORRIDORS_FARMACIA,
        CORRIDORS_LICORES,
        FAVORITE_TAG_REST,
        FAVORITE_TAG_ID_REST,
        FAVORITE_CORRIDOR_SUPER,
        FAVORITE_CORRIDOR_EXPRESS,
        FAVORITE_CORRIDOR_FARMACIA,
        FAVORITE_CORRIDOR_LICORES,
        BRAND_IDS_REST,
        BRAND_IDS_SUPER,
        BRAND_IDS_EXPRESS,
        BRAND_IDS_FARMACIA,
        BRAND_IDS_LICORES,
        BRAND_NAMES_REST,
        BRAND_NAMES_SUPER,
        BRAND_NAMES_EXPRESS,
        BRAND_NAMES_FARMACIA,
        BRAND_NAMES_LICORES,
        BRAND_NAMES_ECOMMERCE,
        STORE_IDS,
        PRODUCTS_IDS_SUPER,
        PRODUCTS_IDS_EXPRESS,
        PRODUCTS_IDS_REST,
        PRODUCTS_IDS_FARMACIA,
        PRODUCTS_IDS_LICORES,
        PRODUCTS_IDS_ECOMMERCE,
        PRODUCTS_NAMES,
        TRADEMARK_NAMES,
        CORRIDORS_SEGMENT,
        GUARANTEES_NEW,
        GUARANTEES_ACTIVE,
        GUARANTEES_REACTIVE,
        TIERHOUR_RESTAURANT,
        WEEKDAY_RESTAURANT,
        TAG_AUDIENCE,
        RECENCY_RFM,
        FREQUENCY_RFM,
        MONETARY_RFM,
        SEGMENT_RFM,
        FINANCIAL_SCORE,
        GMV_SCORE,
        LAST_DEVICE_SCORE,
        MATURITY,
        REACTIVATION_SCORE,
        CURRENT_SQUAD,
        CURRENT_SQUAD_CHURN,
        RECENCY_RCT,
        APPLY_EXCLUSION,
        SUNSET_POLICY,
        RATIO_BUCKET,
        USER_QUALITY,
        FREQUENCY_WEEKS,
        STD_FREQUENCY_WEEKS,
        CHURN_WINDOW,
        WEEKS_UNTIL_CHURN,
        REACTIVATION_POINTS,
        RT_USER,
        PROB_CHURN,
        LTV_M1,
        LTV_M2,
        LTV_M3,
        LTV_M4,
        LTV_M5,
        LTV_M6,
        CLASIF_LTV,
        TENURE,
        BBE,
        LAST_MICROZONE,
        TOP_MICROZONE_ID,
        LAST_LAUCH,
        LAST_SESSION,
        LAST_EVENT,
        DAYS_SINCE_LAST_EVENT` ,
        key: "USER_ID" ,
        description: "Cada fila de esta tabla representa cada usuario que ha descargado la app. Trea carácteristicas importantes como sus calficadores actuales, ACQUISITION_SCORE, ULTRA_SCORE, el estado en prime y el detalle de sus carácteristicas Prime." ,
        query: `"SELECT PAIS
        <br>,IS_PRIME
        <br>,PRIME_SUBSCRIPTION
        <br>,PRIME_PAYMENT_TYPE
        <br>,COUNT(DISTINCT USER_ID) AS USERS
        <br>FROM  GLOBAL_GROWTH.USERS_PARAMETERS
        <br>GROUP BY 1,2,3,4"` ,
        tags: "group by, prime, payment, type" ,
        owner: "Felipe Celis"
    },
    {
        id:9,
        title: "GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2" ,
        table: "GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2" ,
        columns: `ID,
        FIRST_NAME,
        LAST_NAME,
        GENDER,
        BIRTH_DATE,
        AGE,
        AGE_RANGE,
        REGISTERED_AT,
        DEVICE_ID,
        AGE_IN_RAPPI,
        REGISTER_GMV_SCORE,
        REGISTER_OS,
        REGISTER_DEVICE,
        REGISTER_SCORE_DEVICE,
        FRAUD_REASONS,
        BLOCKED,
        SIFT_BLOCKED,
        FIRST_ACQUISITION_SCORE,
        ACQUISITION_SCORE,
        RETENTION_SCORE,
        REACTIVATION_SCORE,
        SEGMENT_RFM,
        CHURN,
        MATURITY,
        RECENCY,
        SEG_MEAN_FREQUENCY,
        SEG_MEAN_MONETARY,
        LOOK_ALIKE_SCORE,
        PRIORITIZATION_SCORE,
        SMS,
        MAILINGS,
        PUSH_MARKETING,
        INAPP,
        REFERRAL_TIER,
        FIRST_RAPPI_PAY_TRANSACTION_AT,
        IS_ACTIVE_DEBIT_CARD,
        ACTIVE_DEBIT_CARD_AT,
        CC_BLOCKED,
        IS_PRIME,
        CATEGORY,
        NUM_APP_LAUNCH_LST_30_D,
        FIRST_ORDER_ID,
        FIRST_ORDER_AT,
        FIRST_ORDER_STATE,
        FIRST_OS,
        FIRST_DEVICE,
        FIRST_DEVICE_SCORE,
        FIRST_COUPON_CODE,
        FIRST_MICROZONE,
        FIRST_GMV_SCORE,
        FIRST_PAYMENT_METHOD,
        FIRST_BRAND_ID,
        FIRST_VERTICAL,
        FIRST_CITY,
        ONLINE_SOURCE,
        MEDIA_COST,
        FIRST_GMV,
        FIRST_COUPON_TYPE,
        FIRST_TOTAL_VALUE,
        FIRST_TOTAL_DISCOUNT,
        FIRST_DISCOUNT_ASSUMED_RAPPI,
        FIRST_DISCOUNT_ASSUMED_ALLY,
        FIRST_DISCOUNT_REFERRALS,
        FIRST_DISCOUNT_COUPONS,
        FIRST_DISCOUNT_ACTIVATION,
        FIRST_DISCOUNT_RAPPI_PRIME,
        FIRST_DISCOUNT_RAPPI_PAY,
        FIRST_DISCOUNT_REACTIVATION,
        FIRST_DISCOUNT_COMPENSATION,
        PAID_GRIN,
        FIRST_PAID_ACTIVATION,
        FIRST_PAID_REACTIVATION,
        DEBITED_PAYOUT_USER,
        DEBITED_SHIPPING_USER,
        PAY_REFERRALS,
        PAY_REFERRALS_USD,
        PAY_REFERRALS_ACQUISITION,
        PAY_REFERRALS_ACQUISITION_USD,
        PAY_REFERRALS_BRANDING,
        PAY_REFERRALS_BRANDING_USD,
        CAC_PAYOUT_REFERRALS,
        CAC_SHIPPING_REFERRALS,
        CAC_DEALS,
        FIRST_RAPPI_PAY_TRANSACTION,
        FIRST_TRANSACTION_ID_RAPPI_PAY,
        LAST_ORDER_AT,
        LAST_ORDER_STATE,
        LAST_ORDER_TYPE,
        LAST_OS,
        LAST_DEVICE,
        LAST_DEVICE_SCORE,
        LAST_MICROZONE,
        LAST_GMV_SCORE,
        LAST_PAYMENT_METHOD,
        OS_LAST_EVENT_RAKAM,
        DEVICE_LAST_EVENT_RAKAM,
        LAT_LAST_EVENT_RAKAM,
        LNG_LAST_EVENT_RAKAM,
        REGISTER_MICROZONE_ID,
        LAST_MICROZONE_ID,
        GMV_SCORE_LAST_EVENT_RAKAM,
        FINANCIAL_SCORE_LAST_EVENT_RAKAM,
        FRAUD_SCORE_RPAY,
        RAPPI_PAY_INTEGRATION,
        INTEGRATION_AT,
        FRUSTRATION_SCORE,
        SCORE_LTV,
        LTV_6_MONTHS,
        SCORE_HVU,
        SCORE_BRAND,
        SCORE_BIN,
        SCORE_TOKEN,
        ULTRA_SCORE,
        TIER_RCT,
        TYPE_USER,
        IS_STUDENT,
        HAS_CHILDREN,
        PETS,
        LOADED_AT` ,
        key: "ID" ,
        description: "Cada fila de esta tabla representa cada usuario que ha descargado la app. Trea carácteristicas importantes de los usuarios basados en sus gustos y en la información que tenemos del usuario. Como su restaurante favorito, si tiene hijos, si tiene mascotas si tiene tendencia a las comidas veganas entre otras." ,
        query: `"SELECT COUNTRY
        <br>,IS_STUDENT
        <br>,HAS_CHILDREN
        <br>,PETS
        <br>,COUNT(DISTINCT ID) AS USERS
        <br>FROM GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2
        <br>GROUP BY 1,2,3,4
        ;"` ,
        tags: "pets, student, finances, country" ,
        owner: "Daniel Santamaría Álvarez"
    },
    {
        id:10,
        title: "GLOBAL_FINANCES.GLOBAL_RAPPI_CREDIT_PAID " ,
        table: "GLOBAL_FINANCES.GLOBAL_RAPPI_CREDIT_PAID " ,
        columns: `COUNTRY,
        APPLICATION_USER_ID,
        RAPPI_CREDIT_PAID_TRANSACTION_ID,
        PAID_AT,
        PAID_ORDER_ID,
        RAPPIPAY_TRANSACTION_ID,
        PAID_REWARD_ID,
        PAID_BATCH_ID,
        VALID_AT,
        EXPIRATED_AT,
        ONLY_SHIPPING,
        COUPON,
        CAMPAIGN_ID,
        CHANNEL,
        OFFER_ID,
        CAMPAIGN_TYPE,
        WAS_SCHEDULER,
        WAS_CASHBACK,
        WAS_PAYOUT,
        ASSUMED_BY,
        PAID_REASON,
        PAID_ORIGIN,
        PAID_TYPE,
        PAID_DESCRIPTION,
        PAID_MESSAGE,
        PARTNERSHIP,
        PAID_VALUE,
        PAID_VALUE_USD,
        SQUAD,
        TEAM,
        PERCENTAGE_ASSUMED,
        LIST_ALLIANCE_TYPE,
        LIST_ALLIES,
        LIST_ALLIES_ID,
        LIST_PERCENTAGE_ALLIES,
        STATE,
        LOADED_AT,
        UPDATED_AT` ,
        key: "PAID_TRANSACTION_ID" ,
        description: "Cada fila de esta tabla representa una transacción de rappi creditos debitados. Describe las ordenes que utilizaron rappi creditos como metodo de pago." ,
        query: `"SELECT COUNTRY
        <br>,PAID_AT::DATE AS DATE
        <br>,SQUAD
        <br>,COUNT(DISTINCT APPLICATION_USER_ID) AS USERS
        <br>FROM GLOBAL_FINANCES.GLOBAL_RAPPI_CREDIT_PAID
        <br>WHERE COUNTRY='CO'
        <br>AND PAID_AT::DATE >= '2022-05-01'
        <br>GROUP BY 1,2,3
        "` ,
        tags: "squad, paid, finances, users" ,
        owner: "Daniel Santamaría Álvarez"
    }
]

let API2 = [
    {
        id:1,
        title: "GLOBAL_FINANCES.GLOBAL_ORDERS", 
        table: "GLOBAL_FINANCES.GLOBAL_ORDERS",
        columns: "order_id, user, payment, cash", 
        key:"order_id", 
        description:"Cada Fila es cada orden realizada en la app y sus carácteristicas principales. Usuario, hora de creación, hora de cierre, tienda, valor del pedido entre otras, en total son 67 Columnas que describen la orden en terminos generales", 
        query:" <br> SELECT  COUNTRY, VERTICAL, COUNT(DISTINCT ORDER_ID) AS ORDERS ,SUM(GMV_USD) AS GMV_DOLARS <br> FROM GLOBAL_FINANCES.GLOBAL_ORDERS <br> WHERE DATE_ORDER_CREATED BETWEEN '2022-01-01' AND CURRENT_DATE AND COUNT_TO_GMV <br> GROUP BY 1,2;",
        tags: "orders, gmv, brand, prime, mz",
        owner : "Daniel Santamaría Álvarez"
    },
    {
        id:2,
        title: "GLOBAL_FINANCES.TBL_DIM_GEOGRAPHY_T1", 
        table: "GLOBAL_FINANCES.TBL_DIM_GEOGRAPHY_T1",
        columns: "order_id, user, payment, cash", 
        key:"SK_GEOGRAPHY", 
        description:"Contiene la descripción de Cada Microzona activa en la app", 
        query:" <br> SELECT  CITY_NAME, COUNT(DISTINCT ORDER_ID) AS ORDERS ,SUM(GMV_USD) AS GMV_DOLARS  <br> FROM GLOBAL_FINANCES.GLOBAL_ORDERS O LEFT JOIN GLOBAL_FINANCES.TBL_DIM_GEOGRAPHY_T1 G ON O.MICROZONE_ID = G.MICROZONE_CODE  <br> AND G.COUNTRY_INDEX=O.COUNTRY <br> WHERE DATE_ORDER_CREATED BETWEEN '2022-01-01' AND CURRENT_DATE AND COUNT_TO_GMV  <br> GROUP BY 1;", 
        tags: "orders, gmv, brand, prime, mz",
        owner : "Daniel Santamaría Álvarez"
    },
    {
        id:3,
        title: "GLOBAL_GROWTH.USERS_PARAMETRS", 
        table: "GLOBAL_GROWTH.USERS_PARAMETRS",
        columns: "order_id, user, payment, cash", 
        key:"USER_ID", 
        description:"Finances Cada fila describe las carácteristicas principes de todos los usuarios registrado en la app.", 
        query:" <br> SELECT PAIS, STATE_TURBO,TURBO_COVERAGE,COUNT(DISTINCT  USER_ID) AS USERS <br> FROM global_growth.users_parameters  <br> GROUP BY 1,2,3;",
        tags: "mz, city, country",
        owner : "Felipe Celis"
    },
    {
        id:4,
        title: "GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2", 
        table: "GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2",
        columns: "order_id, user, payment, cash", 
        key:"ID", 
        description:"Cada fila describe las características principales de todos los usuarios registrado en la app.", 
        query:" <br> SELECT COUNTRY, IS_STUDENT, HAS_CHILDREN, COUNT(DISTINCT ID)  AS USERS  <br> FROM GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2  <br> GROUP BY 1,2,3;",
        tags: "all_users, user_level, segmentation, quality",
        owner : "Daniel Santamaría Álvarez"
    },
    {
        id:5,
        title: "GLOBAL_FINANCES.GLOBAL_ORDERS" ,
        table: "GLOBAL_FINANCES.GLOBAL_ORDERS" ,
        columns: `COUNTRY,
        ORDER_ID,
        APPLICATION_USER_ID,
        CREATED_AT,
        DATE_ORDER_CREATED,
        HOUR_ORDER_CREATED,
        CLOSED_AT,
        DATE_ORDER_CLOSED,
        HOUR_ORDER_CLOSED,
        PLACE_AT,
        UPDATED_AT,
        TOTAL_DISCOUNT,
        TOTAL_DISCOUNT_USD,
        TOTAL_VALUE,
        TOTAL_VALUE_USD,
        TIP,
        TIP_USD,
        GMV,
        GMV_USD,
        FAKE_GMV,
        FAKE_GMV_USD,
        ORGANIC,
        SERVICE_COST,
        SERVICE_COST_USD,
        WHIM,
        COUPON_CODE,
        PAYMENT_METHOD,
        BIN,
        CARD_BRAND,
        CARD_TYPE,
        CARD_CATEGORY,
        ORDER_STATE,
        STATE_TYPE,
        IS_SUBSCRIPTION,
        COUNT_TO_GMV,
        COUNT_TO_BURN,
        CHARGEBACK_AMOUNT,
        RECENCY_ALL,
        RECENCY,
        ORDER_TYPE_ALL,
        ORDER_TYPE,
        LAT,
        LNG,
        MICROZONE_ID,
        MICROZONE_NAME,
        DEVICE_SCORE,
        OS,
        DEVICE,
        REGISTERED_AT,
        FIRST_ORDER_AT_ALL,
        FIRST_ORDER_AT,
        GMV_SCORE,
        BRAND_ID,
        BRAND_NAME,
        BRAND_GROUP,
        BRAND_GROUP_ID,
        STORE_ID,
        STORE_NAME,
        STORE_TYPE,
        VERTICAL_GROUP,
        VERTICAL_SUB_GROUP,
        VERTICAL,
        TYPE_PRIME_SUBSCRIPTION,
        TYPE_PRIME_SUBSCRIPTION_DETAIL,
        PLAN_NAME,
        CREATED_AT_UTC,
        LOADED_AT` ,
        key: "ORDER_ID" ,
        description: "Esta tabla contiene todas las ordenes generadas en la aplicación. Cada Fila Representa una orden y sus carácteristicas principales. Por ejemplo, cuando fue creada, cuando fue entregada, si cuenta el GMV o no. Su valor total, el valor en descuentos, su latitud y longitud, en que tienda, metodo de pago entre muchas otras." ,
        query: `"SELECT DATE_TRUNC('MONTH',CREATED_AT::DATE) AS MES
        <br> ,COUNTRY
        <br> ,COUNT(DISTINCT ORDER_ID) AS ORDERS
        <br> ,SUM(GMV_USD) AS GMV
        <br> FROM GLOBAL_GROWTH.TBL_CO_ORDERS_GROWTH
        <br> WHERE CREATED_AT::DATE BETWEEN '2021-01-01' AND CURRENT_DATE-1
        <br> AND COUNT_TO_GMV
        <br> GROUP BY 1,2
        ;"` ,
        tags: "orders, gmv, brand, prime, mz, global", 
        owner: "Daniel Santamaría Álvarez" 
    },
    {
        id:6,
        title: "GLOBAL_GROWTH.TBL_RCT_USERS_V2" ,
        table: "GLOBAL_GROWTH.TBL_RCT_USERS_V2" ,
        columns: `COUNTRY,
        USER_ID,
        CURRENT_SQUAD,
        TIER_RCT,
        RECENCY,
        IN_REACTIVATION,
        BIG_WHALES,
        RESURECTION,
        VIEW_HOME_RECENCY,
        MAX_AMOUNT,
        EXCLUSION,
        RC_CHARGES,
        SUNSET_POLICY,
        EXCLUSION_CHARGES,
        OS,
        UNIVERSAL_CONTROL_GROUP,
        RCT_CONTROL_GROUP,
        RESURECTION_CONTROL_GROUP,
        SIFT_BLOCKED,
        BLOCKED,
        CC_BLOCKED,
        SMS_BLOCKED,
        PUSH_BLOCKED,
        REAL_EXCLUSION,
        EXCLUSION_ORIGIN,
        ORDERS_RANGE,
        RECENCY_RANGE,
        RATIO_RANGE,
        HAS_CC_ORDER,
        LAT,
        LNG,
        MICROZONE_ID,
        MICROZONE_NAME,
        CITY,
        CITY_ID,
        CPO_ID,
        ORGANIC,
        LAST_ACT` ,
        key: "USER_ID" ,
        description: "Esta tabla trae todas las caráctetisticas principales de los usuarios de rappi que han hecho por lo menos una orden. Contiene" ,
        query: `"SELECT COUNTRY,CURRENT_SQUAD,IN_REACTIVATION, COUNT(DISTINCT USER_ID) AS USERS
        <br>FROM GLOBAL_GROWTH.TBL_RCT_USERS_V2
        <br>GROUP BY 1,2,3;
        "` ,
        tags: "users, orden, country" ,
        owner: "Felipe Celis"
    },
    {
        id:7,
        title: "GLOBAL_GROWTH.TBL_RCT_USERS_HISTORIC_DAILY" ,
        table: "GLOBAL_GROWTH.TBL_RCT_USERS_HISTORIC_DAILY" ,
        columns: `COUNTRY,
        USER_ID,
        RECENCY,
        TIER_RCT,
        EXCLUSION,
        BIG_WHALES,
        RESURECTION,
        CONTROL,
        DATE_SEG,
        REAL_EXCLUSION,
        VIEW_HOME_RECENCY` ,
        key: "NULL" ,
        description: "Esta tabla trae el historico de todos los usuarios de rappi, con una orden o más en la app. Es día vencido. Como su nombr elo indica es diaría." ,
        query: `"SELECT H.COUNTRY
        <br>,H.DATE_SEG+1 AS FECHA
        <br>, H.TIER_RCT
        <br>, H.RESURECTION
        <br>, CASE WHEN H.RECENCY > 120  AND RIGHT (H.USER_ID,2) IN (15,35,55,75,95) THEN 'RESURECTION RECENCY'
        <br>       WHEN H.RECENCY BETWEEN 27 AND 120 AND RIGHT (H.USER_ID,2) IN  (06,26,46,66,86) THEN 'EARLY REACTIVATION' 
        <br>       END AS REACTIVATION_RECENCY
        <br>, COUNT(DISTINCT H.USER_ID) AS BASE
        <br>, COUNT(DISTINCT O.APPLICATION_USER_ID) AS REACTIVACION
        <br>, SUM(GMV_USD) AS GMV
        <br>FROM GLOBAL_GROWTH.TBL_RCT_USERS_HISTORIC_V2 H
        <br>LEFT JOIN (SELECT COUNTRY, APPLICATION_USER_ID, CREATED_AT::DATE AS FECHA, GMV_USD, ORDER_TYPE, RECENCY
        <br>            FROM GLOBAL_FINANCES.GLOBAL_ORDERS
        <br>            WHERE COUNT_TO_GMV=TRUE
        <br>            AND CREATED_AT::DATE >= DATE_TRUNC('MONTH',CURRENT_DATE-1)
        <br>            AND RIGHT(APPLICATION_USER_ID,2) IN (06,26,46,66,86,15,35,55,75,95)
        <br>            AND ORDER_TYPE ='REACTIVATION') O
        <br>ON H.COUNTRY=O.COUNTRY AND H.USER_ID=O.APPLICATION_USER_ID AND O.FECHA=H.DATE_SEG+1
        <br>  WHERE H.DATE_SEG+1>= DATE_TRUNC('MONTH',CURRENT_DATE-1)
        <br>  AND (H.RECENCY > 120  AND RIGHT (H.USER_ID,2) IN (15,35,55,75,95) OR H.RECENCY BETWEEN 27 AND 120 AND RIGHT (H.USER_ID,2) IN  (06,26,46,66,86)) 
        <br>  AND H.RECENCY > 27
        <br>GROUP BY 1,2,3,4,5"` ,
        tags: "join, left join, case, country, order" ,
        owner: "Felipe Celis"
    },
    {
        id:8,
        title: "GLOBAL_GROWTH.USERS_PARAMETERS" ,
        table: "GLOBAL_GROWTH.USERS_PARAMETERS" ,
        columns: `PAIS,
        USER_ID,
        SEGMENT,
        FIRST_NAME,
        LAST_NAME,
        USER_GENDER,
        AGE,
        REGISTERED_AT,
        BIRTH_DATE,
        IS_PRIME,
        PRIME_SUBSCRIPTION,
        CATEGORY_REWARDS,
        LAST_OS,
        DEVICE,
        BLOCKED,
        PARENT,
        VEGG_FOOD_LOVER,
        HEALTHY_FOOD,
        COFFEE_LOVERS,
        LIQUOR_LOVER,
        PETS_LOVER,
        CONTROL_SQUADS,
        ACQUISITION_SCORE,
        EARLY_SCORE,
        ULTRA_SCORE,
        REFERRALS_ACTIVE_COUPONS,
        REF_REFCODE,
        REF_REFCODE_PAYOUT,
        REF_REFCODE_GIVE_SHIPPING,
        RCT_REFCODE,
        RCT_REFCODE_PAYOUT,
        RCT_REFCODE_GIVE_SHIPPING,
        ETAS_BANNER,
        SUBSCRIBED_STATUS_SMS,
        SUBSCRIBED_STATUS_EMAIL,
        SUBSCRIBED_STATUS_PUSH,
        SUBSCRIBED_STATUS_INAPP,
        SUBSCRIBED_STATUS_WHATSAPP,
        EMAIL_OPEN,
        EMAIL_CLICK,
        PUSH_OPEN_CALSIF,
        LAST_DATA_CHECK_AT,
        CREDIT_CARD,
        PAYMENT_METHODS,
        CC_BLOCKED,
        SIFT_BLOCKED,
        HAVE_PREMIUM_CC,
        BIN_NUMBER,
        ACCOUNTS_PER_DEVICE,
        GROUP_30,
        GROUP_90,
        GROUPS,
        VERTICALES,
        VERTICALES_30,
        VERTICALES_90,
        TOP_FIVE_CITIES,
        LAST_CITY_ID,
        TOP_CITY_ID,
        TOP_CITY,
        MICROZONE_ID,
        MICROZONE_NAME,
        LAST_ZONE_ID,
        TOP_ZONE_ID,
        LAST_ORDER_LAT,
        LAST_ORDER_LNG,
        LAST_ORDER_CITY,
        LAST_CITY_CATEGORY,
        ACTIVE_COUNTRY,
        TURBO_COVERAGE,
        NEARBY_STORE_ID_TURBO,
        LAST_CELL_TOKEN,
        DELIVERY_COST_SHIPPING,
        LAST_ACTION_PRIME,
        RENOVATE_PRIME,
        PRIME_ENDS_AT,
        PRIME_PAYMENT_TYPE,
        PRIME_SHIPPING_SAVINGS_30D,
        PRIME_SHIPPING_SAVINGS_365D,
        PRIME_SHIPPING_SAVINGS_LIFETIME,
        PRIME_SERVICE_FEE_SAVINGS_30D,
        PRIME_SERVICE_FEE_SAVINGS_365D,
        PRIME_SERVICE_FEE_SAVINGS_LIFETIME,
        PRIME_TOTAL_SAVINGS_30D,
        PRIME_TOTAL_SAVINGS_365D,
        PRIME_TOTAL_SAVINGS_LIFETIME,
        PRIME_POTENTIAL_SHIPPING_SAVINGS_30D,
        PRIME_POTENTIAL_SHIPPING_SAVINGS_365D,
        PRIME_POTENTIAL_SHIPPING_SAVINGS_LIFETIME,
        PRIME_POTENTIAL_SERVICE_FEE_SAVINGS_30D,
        PRIME_POTENTIAL_SERVICE_FEE_SAVINGS_365D,
        PRIME_POTENTIAL_SERVICE_FEE_SAVINGS_LIFETIME,
        PRIME_POTENTIAL_TOTAL_SAVINGS_30D,
        PRIME_POTENTIAL_TOTAL_SAVINGS_365D,
        PRIME_POTENTIAL_TOTAL_SAVINGS_LIFETIME,
        PRIME_SEGMENT,
        PRIME_TRIAL,
        PRIME_PLAN_DAYS,
        FIRST_ORDER_AT,
        LAST_ORDER,
        TOTAL_ORDERS,
        AOV,
        TICKET_CUMULATIVE,
        GMV_CUMULATIVE,
        MEDIAN_FREQ_RAPPI,
        TOTAL_ORDERS_30,
        AOV_30,
        TOTAL_ORDERS_90,
        AOV_90,
        STATE_RAPPI,
        STATE_REST,
        STATE_SUPER,
        STATE_EXPRESS,
        STATE_TURBO,
        STATE_FARMACIA,
        STATE_LICORES,
        STATE_COURRIER,
        STATE_ULTRASERVICIO,
        STATE_WHIM,
        STATE_ECOMMERCE,
        STATE_FASHION,
        STATE_HOME,
        STATE_PETS,
        STATE_TECH,
        STATE_BABIES_KIDS,
        STATE_SERVICES,
        STATE_TRAVEL,
        STATE_SOAT,
        NUEVO_REST,
        NUEVO_SUPER,
        NUEVO_EXPRESS,
        NUEVO_TURBO,
        NUEVO_FARMACIA,
        NUEVO_LICORES,
        NUEVO_COURRIER,
        NUEVO_ULTRASERVICIO,
        NUEVO_WHIM,
        ACTIVO_REST,
        ACTIVO_SUPER,
        ACTIVO_EXPRESS,
        ACTIVO_TURBO,
        ACTIVO_FARMACIA,
        ACTIVO_LICORES,
        ACTIVO_COURRIER,
        ACTIVO_ULTRASERVICIO,
        ACTIVO_WHIM,
        LAST_ORDER_REST,
        LAST_ORDER_SUPER,
        LAST_ORDER_EXPRESS,
        LAST_ORDER_TURBO,
        LAST_ORDER_FARMACIA,
        LAST_ORDER_LICORES,
        LAST_ORDER_COURRIER,
        LAST_ORDER_ULTRASERVICIO,
        LAST_ORDER_WHIM,
        LAST_ORDER_ECOMMERCE,
        LAST_ORDER_BABIES_KIDS,
        LAST_ORDER_FASHION,
        LAST_ORDER_HOME,
        LAST_ORDER_PETS,
        LAST_ORDER_SERVICES,
        LAST_ORDER_SOAT,
        LAST_ORDER_TECH,
        LAST_ORDER_TRAVEL,
        FIRST_ORDER_REST,
        FIRST_ORDER_SUPER,
        FIRST_ORDER_EXPRESS,
        FIRST_ORDER_TURBO,
        FIRST_ORDER_FARMACIA,
        FIRST_ORDER_LICORES,
        FIRST_ORDER_COURRIER,
        FIRST_ORDER_ULTRASERVICIO,
        FIRST_ORDER_WHIM,
        FIRST_ORDER_ECOMMERCE,
        FIRST_ORDER_BABIES_KIDS,
        FIRST_ORDER_FASHION,
        FIRST_ORDER_HOME,
        FIRST_ORDER_PETS,
        FIRST_ORDER_SERVICES,
        FIRST_ORDER_SOAT,
        FIRST_ORDER_TECH,
        FIRST_ORDER_TRAVEL,
        ORDERS_REST,
        ORDERS_SUPER,
        ORDERS_EXPRESS,
        ORDERS_TURBO,
        ORDERS_FARMACIA,
        ORDERS_LICORES,
        ORDERS_COURRIER,
        ORDERS_ULTRASERVICIO,
        LAST_VERTICAL,
        LAST_ORDER_ORGANIC,
        MAX_TKT,
        MIN_TKT,
        MAX_TKT_REST,
        AVG_TKT_REST,
        MIN_TKT_REST,
        MAX_TKT_SUPER,
        AVG_TKT_SUPER,
        MIN_TKT_SUPER,
        MAX_TKT_EXPRESS,
        AVG_TKT_EXPRESS,
        MIN_TKT_EXPRESS,
        MAX_TKT_FARMACIA,
        AVG_TKT_FARMACIA,
        MIN_TKT_FARMACIA,
        MAX_TKT_LICORES,
        AVG_TKT_LICORES,
        MIN_TKT_LICORES,
        MAX_TKT_COURRIER,
        AVG_TKT_COURRIER,
        MIN_TKT_COURRIER,
        MAX_TKT_ULTRASERVICIO,
        AVG_TKT_ULTRASERVICIO,
        MIN_TKT_ULTRASERVICIO,
        TKT_CUMULATIVE_REST,
        TKT_CUMULATIVE_SUPER,
        TKT_CUMULATIVE_EXPRESS,
        TKT_CUMULATIVE_FARMACIA,
        TKT_CUMULATIVE_LICORES,
        TKT_CUMULATIVE_COURRIER,
        TKT_CUMULATIVE_ULTRASERVICIO,
        TKT_CUMULATIVE_WHIM,
        GMV_CUMULATIVE_REST,
        GMV_CUMULATIVE_SUPER,
        GMV_CUMULATIVE_EXPRESS,
        GMV_CUMULATIVE_FARMACIA,
        GMV_CUMULATIVE_LICORES,
        GMV_CUMULATIVE_COURRIER,
        GMV_CUMULATIVE_ULTRASERVICIO,
        GMV_CUMULATIVE_WHIM,
        MEDIAN_FREQ_REST,
        MEDIAN_FREQ_SUPER,
        MEDIAN_FREQ_EXPRESS,
        MEDIAN_FREQ_FARMACIA,
        MEDIAN_FREQ_LICORES,
        MEDIAN_FREQ_COURRIER,
        MEDIAN_FREQ_ULTRASERVICIO,
        ORDERS_1,
        ORDERS_REST_1,
        ORDERS_SUPER_1,
        ORDERS_EXPRESS_1,
        ORDERS_TURBO_1,
        ORDERS_FARMACIA_1,
        ORDERS_LICORES_1,
        ORDERS_7,
        ORDERS_REST_7,
        ORDERS_SUPER_7,
        ORDERS_EXPRESS_7,
        ORDERS_TURBO_7,
        ORDERS_FARMACIA_7,
        ORDERS_LICORES_7,
        ORDERS_REST_30,
        ORDERS_SUPER_30,
        ORDERS_EXPRESS_30,
        ORDERS_TURBO_30,
        ORDERS_FARMACIA_30,
        ORDERS_LICORES_30,
        ORDERS_COURRIER_30,
        ORDERS_ULTRASERVICIO_30,
        AVG_TKT_REST_30,
        AVG_TKT_SUPER_30,
        AVG_TKT_EXPRESS_30,
        AVG_TKT_FARMACIA_30,
        AVG_TKT_LICORES_30,
        AVG_TKT_COURRIER_30,
        AVG_TKT_ULTRASERVICIO_30,
        ORDERS_REST_90,
        ORDERS_SUPER_90,
        ORDERS_EXPRESS_90,
        ORDERS_TURBO_90,
        ORDERS_FARMACIA_90,
        ORDERS_LICORES_90,
        ORDERS_COURRIER_90,
        ORDERS_ULTRASERVICIO_90,
        AVG_TKT_REST_90,
        AVG_TKT_SUPER_90,
        AVG_TKT_EXPRESS_90,
        AVG_TKT_FARMACIA_90,
        AVG_TKT_LICORES_90,
        AVG_TKT_COURRIER_90,
        AVG_TKT_ULTRASERVICIO_90,
        PRODUCT_TYPES_RAPPI,
        PRODUCT_TYPES_REST,
        PRODUCT_TYPES_SUPER,
        PRODUCT_TYPES_EXPRESS,
        PRODUCT_TYPES_FARMACIA,
        PRODUCT_TYPES_LICORES,
        TAGS_REST,
        TAG_IDS,
        CORRIDORS,
        CORRIDORS_SUPER,
        CORRIDORS_EXPRESS,
        CORRIDORS_FARMACIA,
        CORRIDORS_LICORES,
        FAVORITE_TAG_REST,
        FAVORITE_TAG_ID_REST,
        FAVORITE_CORRIDOR_SUPER,
        FAVORITE_CORRIDOR_EXPRESS,
        FAVORITE_CORRIDOR_FARMACIA,
        FAVORITE_CORRIDOR_LICORES,
        BRAND_IDS_REST,
        BRAND_IDS_SUPER,
        BRAND_IDS_EXPRESS,
        BRAND_IDS_FARMACIA,
        BRAND_IDS_LICORES,
        BRAND_NAMES_REST,
        BRAND_NAMES_SUPER,
        BRAND_NAMES_EXPRESS,
        BRAND_NAMES_FARMACIA,
        BRAND_NAMES_LICORES,
        BRAND_NAMES_ECOMMERCE,
        STORE_IDS,
        PRODUCTS_IDS_SUPER,
        PRODUCTS_IDS_EXPRESS,
        PRODUCTS_IDS_REST,
        PRODUCTS_IDS_FARMACIA,
        PRODUCTS_IDS_LICORES,
        PRODUCTS_IDS_ECOMMERCE,
        PRODUCTS_NAMES,
        TRADEMARK_NAMES,
        CORRIDORS_SEGMENT,
        GUARANTEES_NEW,
        GUARANTEES_ACTIVE,
        GUARANTEES_REACTIVE,
        TIERHOUR_RESTAURANT,
        WEEKDAY_RESTAURANT,
        TAG_AUDIENCE,
        RECENCY_RFM,
        FREQUENCY_RFM,
        MONETARY_RFM,
        SEGMENT_RFM,
        FINANCIAL_SCORE,
        GMV_SCORE,
        LAST_DEVICE_SCORE,
        MATURITY,
        REACTIVATION_SCORE,
        CURRENT_SQUAD,
        CURRENT_SQUAD_CHURN,
        RECENCY_RCT,
        APPLY_EXCLUSION,
        SUNSET_POLICY,
        RATIO_BUCKET,
        USER_QUALITY,
        FREQUENCY_WEEKS,
        STD_FREQUENCY_WEEKS,
        CHURN_WINDOW,
        WEEKS_UNTIL_CHURN,
        REACTIVATION_POINTS,
        RT_USER,
        PROB_CHURN,
        LTV_M1,
        LTV_M2,
        LTV_M3,
        LTV_M4,
        LTV_M5,
        LTV_M6,
        CLASIF_LTV,
        TENURE,
        BBE,
        LAST_MICROZONE,
        TOP_MICROZONE_ID,
        LAST_LAUCH,
        LAST_SESSION,
        LAST_EVENT,
        DAYS_SINCE_LAST_EVENT` ,
        key: "USER_ID" ,
        description: "Cada fila de esta tabla representa cada usuario que ha descargado la app. Trea carácteristicas importantes como sus calficadores actuales, ACQUISITION_SCORE, ULTRA_SCORE, el estado en prime y el detalle de sus carácteristicas Prime." ,
        query: `"SELECT PAIS
        <br>,IS_PRIME
        <br>,PRIME_SUBSCRIPTION
        <br>,PRIME_PAYMENT_TYPE
        <br>,COUNT(DISTINCT USER_ID) AS USERS
        <br>FROM  GLOBAL_GROWTH.USERS_PARAMETERS
        <br>GROUP BY 1,2,3,4"` ,
        tags: "group by, prime, payment, type" ,
        owner: "Felipe Celis"
    },
    {
        id:9,
        title: "GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2" ,
        table: "GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2" ,
        columns: `ID,
        FIRST_NAME,
        LAST_NAME,
        GENDER,
        BIRTH_DATE,
        AGE,
        AGE_RANGE,
        REGISTERED_AT,
        DEVICE_ID,
        AGE_IN_RAPPI,
        REGISTER_GMV_SCORE,
        REGISTER_OS,
        REGISTER_DEVICE,
        REGISTER_SCORE_DEVICE,
        FRAUD_REASONS,
        BLOCKED,
        SIFT_BLOCKED,
        FIRST_ACQUISITION_SCORE,
        ACQUISITION_SCORE,
        RETENTION_SCORE,
        REACTIVATION_SCORE,
        SEGMENT_RFM,
        CHURN,
        MATURITY,
        RECENCY,
        SEG_MEAN_FREQUENCY,
        SEG_MEAN_MONETARY,
        LOOK_ALIKE_SCORE,
        PRIORITIZATION_SCORE,
        SMS,
        MAILINGS,
        PUSH_MARKETING,
        INAPP,
        REFERRAL_TIER,
        FIRST_RAPPI_PAY_TRANSACTION_AT,
        IS_ACTIVE_DEBIT_CARD,
        ACTIVE_DEBIT_CARD_AT,
        CC_BLOCKED,
        IS_PRIME,
        CATEGORY,
        NUM_APP_LAUNCH_LST_30_D,
        FIRST_ORDER_ID,
        FIRST_ORDER_AT,
        FIRST_ORDER_STATE,
        FIRST_OS,
        FIRST_DEVICE,
        FIRST_DEVICE_SCORE,
        FIRST_COUPON_CODE,
        FIRST_MICROZONE,
        FIRST_GMV_SCORE,
        FIRST_PAYMENT_METHOD,
        FIRST_BRAND_ID,
        FIRST_VERTICAL,
        FIRST_CITY,
        ONLINE_SOURCE,
        MEDIA_COST,
        FIRST_GMV,
        FIRST_COUPON_TYPE,
        FIRST_TOTAL_VALUE,
        FIRST_TOTAL_DISCOUNT,
        FIRST_DISCOUNT_ASSUMED_RAPPI,
        FIRST_DISCOUNT_ASSUMED_ALLY,
        FIRST_DISCOUNT_REFERRALS,
        FIRST_DISCOUNT_COUPONS,
        FIRST_DISCOUNT_ACTIVATION,
        FIRST_DISCOUNT_RAPPI_PRIME,
        FIRST_DISCOUNT_RAPPI_PAY,
        FIRST_DISCOUNT_REACTIVATION,
        FIRST_DISCOUNT_COMPENSATION,
        PAID_GRIN,
        FIRST_PAID_ACTIVATION,
        FIRST_PAID_REACTIVATION,
        DEBITED_PAYOUT_USER,
        DEBITED_SHIPPING_USER,
        PAY_REFERRALS,
        PAY_REFERRALS_USD,
        PAY_REFERRALS_ACQUISITION,
        PAY_REFERRALS_ACQUISITION_USD,
        PAY_REFERRALS_BRANDING,
        PAY_REFERRALS_BRANDING_USD,
        CAC_PAYOUT_REFERRALS,
        CAC_SHIPPING_REFERRALS,
        CAC_DEALS,
        FIRST_RAPPI_PAY_TRANSACTION,
        FIRST_TRANSACTION_ID_RAPPI_PAY,
        LAST_ORDER_AT,
        LAST_ORDER_STATE,
        LAST_ORDER_TYPE,
        LAST_OS,
        LAST_DEVICE,
        LAST_DEVICE_SCORE,
        LAST_MICROZONE,
        LAST_GMV_SCORE,
        LAST_PAYMENT_METHOD,
        OS_LAST_EVENT_RAKAM,
        DEVICE_LAST_EVENT_RAKAM,
        LAT_LAST_EVENT_RAKAM,
        LNG_LAST_EVENT_RAKAM,
        REGISTER_MICROZONE_ID,
        LAST_MICROZONE_ID,
        GMV_SCORE_LAST_EVENT_RAKAM,
        FINANCIAL_SCORE_LAST_EVENT_RAKAM,
        FRAUD_SCORE_RPAY,
        RAPPI_PAY_INTEGRATION,
        INTEGRATION_AT,
        FRUSTRATION_SCORE,
        SCORE_LTV,
        LTV_6_MONTHS,
        SCORE_HVU,
        SCORE_BRAND,
        SCORE_BIN,
        SCORE_TOKEN,
        ULTRA_SCORE,
        TIER_RCT,
        TYPE_USER,
        IS_STUDENT,
        HAS_CHILDREN,
        PETS,
        LOADED_AT` ,
        key: "ID" ,
        description: "Cada fila de esta tabla representa cada usuario que ha descargado la app. Trea carácteristicas importantes de los usuarios basados en sus gustos y en la información que tenemos del usuario. Como su restaurante favorito, si tiene hijos, si tiene mascotas si tiene tendencia a las comidas veganas entre otras." ,
        query: `"SELECT COUNTRY
        <br>,IS_STUDENT
        <br>,HAS_CHILDREN
        <br>,PETS
        <br>,COUNT(DISTINCT ID) AS USERS
        <br>FROM GLOBAL_FINANCES.GLOBAL_APPLICATION_USERS_V2
        <br>GROUP BY 1,2,3,4
        ;"` ,
        tags: "pets, student, finances, country" ,
        owner: "Daniel Santamaría Álvarez"
    },
    {
        id:10,
        title: "GLOBAL_FINANCES.GLOBAL_RAPPI_CREDIT_PAID " ,
        table: "GLOBAL_FINANCES.GLOBAL_RAPPI_CREDIT_PAID " ,
        columns: `COUNTRY,
        APPLICATION_USER_ID,
        RAPPI_CREDIT_PAID_TRANSACTION_ID,
        PAID_AT,
        PAID_ORDER_ID,
        RAPPIPAY_TRANSACTION_ID,
        PAID_REWARD_ID,
        PAID_BATCH_ID,
        VALID_AT,
        EXPIRATED_AT,
        ONLY_SHIPPING,
        COUPON,
        CAMPAIGN_ID,
        CHANNEL,
        OFFER_ID,
        CAMPAIGN_TYPE,
        WAS_SCHEDULER,
        WAS_CASHBACK,
        WAS_PAYOUT,
        ASSUMED_BY,
        PAID_REASON,
        PAID_ORIGIN,
        PAID_TYPE,
        PAID_DESCRIPTION,
        PAID_MESSAGE,
        PARTNERSHIP,
        PAID_VALUE,
        PAID_VALUE_USD,
        SQUAD,
        TEAM,
        PERCENTAGE_ASSUMED,
        LIST_ALLIANCE_TYPE,
        LIST_ALLIES,
        LIST_ALLIES_ID,
        LIST_PERCENTAGE_ALLIES,
        STATE,
        LOADED_AT,
        UPDATED_AT` ,
        key: "PAID_TRANSACTION_ID" ,
        description: "Cada fila de esta tabla representa una transacción de rappi creditos debitados. Describe las ordenes que utilizaron rappi creditos como metodo de pago." ,
        query: `"SELECT COUNTRY
        <br>,PAID_AT::DATE AS DATE
        <br>,SQUAD
        <br>,COUNT(DISTINCT APPLICATION_USER_ID) AS USERS
        <br>FROM GLOBAL_FINANCES.GLOBAL_RAPPI_CREDIT_PAID
        <br>WHERE COUNTRY='CO'
        <br>AND PAID_AT::DATE >= '2022-05-01'
        <br>GROUP BY 1,2,3
        "` ,
        tags: "squad, paid, finances, users" ,
        owner: "Daniel Santamaría Álvarez"
    },
    {
        id:11,
        title: "GLOBAL_PRUEBA", 
        table: "GLOBAL_PRUEBA",
        columns: "order_id, user, payment, cash", 
        key:"ID", 
        description:"Esta query se encarga de de consultar el número de usuarios en la tabla de GLOBAL_PRUEBA", 
        query:" SELECT count(*) <br> FROM GLOBAL_PRUEBA;",
        tags: "test, martes, sacamos 5, prueba, global",
        owner : "Daniel Santamaría Álvarez"
    }
]


let contador = 6
const contenido = document.getElementById('contenido');
const formulario = document.querySelector('#formulario')

let loadSoloTablas = () => {
    contenido.innerHTML = ""
    const texto = formulario.value.toLowerCase()
    let jejeje = ""
    if(contador === 6)
    {jejeje = API}
    else { jejeje = API2}

    for(table of jejeje){
        
        if(table.table.toLowerCase().indexOf(texto) !== -1 || 
        table.columns.toLowerCase().indexOf(texto) !== -1 || 
        table.tags.toLowerCase().indexOf(texto) !== -1 ){
            contenido.innerHTML += `
            <div class="querys">
                <h3>${table.title}</h3>
                <p>
                    <a class="btn naranjab" data-bs-toggle="collapse" href="#a${table.id}" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Descripción</a>
                    <button class="btn naranjab" type="button" data-bs-toggle="collapse" data-bs-target="#b${table.id}" aria-expanded="false" aria-controls="multiCollapseExample2">Query</button>
                </p>
                <div class="row">
                    <div class="col">
                        <div class="collapse multi-collapse" id="a${table.id}">
                            <div class="card card-body">
                                ${table.description}
                                <strong class="bold" class="bold">Columns: </strong> ${table.columns}
                                <strong class="bold">Number of Columns: </strong> ${table.columns.split(',').length}
                                <strong class="bold">Primary Key: </strong> ${table.key}
                                <strong class="bold">Tags: </strong> ${table.tags}
                                <strong class="bold">Creador: </strong> ${table.owner}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="row py-1">
                    <div class="col">
                        <div class="collapse multi-collapse" id="b${table.id}">
                            <div class="card card-body">
                                <pre>
        <code class="w-100">
            ${table.query}
        </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
}

let loadSoloQuerys = () => {
    contenido.innerHTML = ""
    const texto = formulario.value.toLowerCase()
    let jejeje = ""
    if(contador === 6)
    {jejeje = API}
    else { jejeje = API2}

    for(table of jejeje){
        
        if(table.query.toLowerCase().indexOf(texto) !== -1 ||
        table.tags.toLowerCase().indexOf(texto) !== -1 ){
            contenido.innerHTML += `
            <div class="querys">
                <h3>${table.title}</h3>
                <p>
                    <a class="btn naranjab" data-bs-toggle="collapse" href="#a${table.id}" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Descripción</a>
                    <button class="btn naranjab" type="button" data-bs-toggle="collapse" data-bs-target="#b${table.id}" aria-expanded="false" aria-controls="multiCollapseExample2">Query</button>
                </p>
                <div class="row">
                    <div class="col">
                        <div class="collapse multi-collapse" id="a${table.id}">
                            <div class="card card-body">
                                ${table.description}
                                <strong class="bold">Columns: </strong> ${table.columns}
                                <strong class="bold">Number of Columns: </strong> ${table.columns.split(',').length}
                                <strong class="bold">Primary Key: </strong> ${table.key}
                                <strong class="bold">Tags: </strong> ${table.tags}
                                <strong class="bold">Creador: </strong> ${table.owner}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="row py-1">
                    <div class="col">
                        <div class="collapse multi-collapse" id="b${table.id}">
                            <div class="card card-body">
                                <pre>
        <code class="w-100">
            ${table.query}
        </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
}

let loadSoloDescripcion = () => {
    contenido.innerHTML = ""
    const texto = formulario.value.toLowerCase()
    let jejeje = ""
    if(contador === 6)
    {jejeje = API}
    else { jejeje = API2}

    for(table of jejeje){
        
        if(table.description.toLowerCase().indexOf(texto) !== -1 ||
        table.tags.toLowerCase().indexOf(texto) !== -1 ){
            contenido.innerHTML += `
            <div class="querys">
                <h3>${table.title}</h3>
                <p>
                    <a class="btn naranjab" data-bs-toggle="collapse" href="#a${table.id}" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Descripción</a>
                    <button class="btn naranjab" type="button" data-bs-toggle="collapse" data-bs-target="#b${table.id}" aria-expanded="false" aria-controls="multiCollapseExample2">Query</button>
                </p>
                <div class="row">
                    <div class="col">
                        <div class="collapse multi-collapse" id="a${table.id}">
                            <div class="card card-body">
                                ${table.description}
                                <strong class="bold">Columns: </strong> ${table.columns}
                                <strong class="bold">Number of Columns: </strong> ${table.columns.split(',').length}
                                <strong class="bold">Primary Key: </strong> ${table.key}
                                <strong class="bold">Tags: </strong> ${table.tags}
                                <strong class="bold">Creador: </strong> ${table.owner}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="row py-1">
                    <div class="col">
                        <div class="collapse multi-collapse" id="b${table.id}">
                            <div class="card card-body">
                                <pre>
        <code class="w-100">
            ${table.query}
        </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
}

let loadFinanzas = () =>{
    contenido.innerHTML = ""
    const texto = formulario.value.toLowerCase()
    let jejeje = ""
    if(contador === 6)
    {jejeje = API}
    else { jejeje = API2}

    for(table of jejeje){
        
        if(table.title.toLowerCase().indexOf(texto) !== -1 || 
        table.table.toLowerCase().indexOf(texto) !== -1 || 
        table.columns.toLowerCase().indexOf(texto) !== -1 || 
        table.description.toLowerCase().indexOf(texto) !== -1 ||
        table.query.toLowerCase().indexOf(texto) !== -1 ||
        table.tags.toLowerCase().indexOf(texto) !== -1 ){
            contenido.innerHTML += `
            <div class="querys">
                <h3>${table.title}</h3>
                <p>
                    <a class="btn naranjab" data-bs-toggle="collapse" href="#a${table.id}" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Descripción</a>
                    <button class="btn naranjab" type="button" data-bs-toggle="collapse" data-bs-target="#b${table.id}" aria-expanded="false" aria-controls="multiCollapseExample2">Query</button>
                </p>
                <div class="row">
                    <div class="col">
                        <div class="collapse multi-collapse" id="a${table.id}">
                            <div class="card card-body">
                                ${table.description}
                                <strong class="bold">Columns: </strong> ${table.columns}
                                <strong class="bold">Number of Columns: </strong> ${table.columns.split(',').length}
                                <strong class="bold">Primary Key: </strong> ${table.key}
                                <strong class="bold">Tags: </strong> ${table.tags}
                                <strong class="bold">Creador: </strong> ${table.owner}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="row py-1">
                    <div class="col">
                        <div class="collapse multi-collapse" id="b${table.id}">
                            <div class="card card-body">
                                <pre>
        <code class="w-100">
            ${table.query}
        </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
}


var stablas = document.getElementById('stablas')
var squerys = document.getElementById('squerys')
var sdescripcion = document.getElementById('sdescripcion')

let buscar = () => {
    if (stablas.checked){
        squerys.disabled = true
        sdescripcion.disabled = true
        loadSoloTablas()
    }
    else if(squerys.checked){
        stablas.disabled = true
        sdescripcion.disabled = true
        loadSoloQuerys()
    }
    else if(squerys.checked){
        stablas.disabled = true
        squerys.disabled = true
        loadSoloQuerys()
    }
    else{
        loadFinanzas()
        stablas.disabled = false
        squerys.disabled = false
        sdescripcion.disabled = false
    }
}

formulario.addEventListener('keyup', buscar);
stablas.addEventListener('change', buscar);
squerys.addEventListener('change', buscar);
sdescripcion.addEventListener('change', buscar);




  let sumar = () => {
      contador = 7
      console.log(contador)
  }

const espichar = document.getElementById("espichar")

espichar.addEventListener('click', ()=>{
    sumar()
})






