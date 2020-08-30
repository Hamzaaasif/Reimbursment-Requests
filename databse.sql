--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4
-- Dumped by pg_dump version 12.3

-- Started on 2020-08-31 01:02:09

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16395)
-- Name: requests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.requests (
    id integer NOT NULL,
    employeeid character varying(50),
    reasons character varying(500),
    comment character varying(500),
    money integer,
    status character varying(50),
    date character(50)
);


ALTER TABLE public.requests OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16401)
-- Name: requests_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.requests ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.requests_id_seq
    START WITH 101
    INCREMENT BY 1
    MINVALUE 101
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 204 (class 1259 OID 16403)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    fname character varying(50),
    lname character varying(50) NOT NULL,
    password character varying(50),
    userrole character varying(50),
    employeeid character varying(50)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16406)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 101
    INCREMENT BY 1
    MINVALUE 101
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2826 (class 0 OID 16395)
-- Dependencies: 202
-- Data for Name: requests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.requests (id, employeeid, reasons, comment, money, status, date) FROM stdin;
126	employee	asaksnkj	asnaksnxakjsnjaassaxsx	2323	Approved	31-8-2020                                         
125	employee	asahksbakjns	lnslklsdn	22323	Denied	31-8-2020                                         
123	employee	this is new request	this is new comment	567522	Pending	31-8-2020                                         
\.


--
-- TOC entry 2828 (class 0 OID 16403)
-- Dependencies: 204
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, fname, lname, password, userrole, employeeid) FROM stdin;
109	Manager	one	manager1234	manager	manager
108	Employee	one	employee1234	employee	employee
111	osama	ahmed	hamza1234	manager	osama
\.


--
-- TOC entry 2835 (class 0 OID 0)
-- Dependencies: 203
-- Name: requests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.requests_id_seq', 126, true);


--
-- TOC entry 2836 (class 0 OID 0)
-- Dependencies: 205
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 111, true);


--
-- TOC entry 2695 (class 2606 OID 16409)
-- Name: requests requests_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.requests
    ADD CONSTRAINT requests_pkey PRIMARY KEY (id);


--
-- TOC entry 2697 (class 2606 OID 16411)
-- Name: users users_employeeid_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_employeeid_key UNIQUE (employeeid);


--
-- TOC entry 2699 (class 2606 OID 16415)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


-- Completed on 2020-08-31 01:02:13

--
-- PostgreSQL database dump complete
--

