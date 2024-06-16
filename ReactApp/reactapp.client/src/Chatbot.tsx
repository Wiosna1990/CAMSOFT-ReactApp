
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const BotRedirect = ({ url, message }) => {
    return (
        <div>
            <a href={url} target="_self">
                {message}
            </a>
        </div>
    );
};

const CHATBOT_THEME = {
    background: "#FFFEFC",
    fontFamily: "Verdana",
    fontSize: "13px",
    headerBgColor: "#1d8cd1",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#8ACBED",
    botFontColor: "#000000",
    userBubbleColor: "#8ACBED",
    userFontColor: "#000000"
};


const ChatBotHelper = () => {

    const steps = [
        {
            id: "1",
            message: "Witaj jestem wirtualnym Asystentem i pomogę Ci w obsłudze programu CAMSOFT",
            trigger: "2"
        },
        {
            id: "2",
            message: "Jakich informacji potrzebujesz?",
            trigger: "3"
        },
        {
            id: "3",
            options: [
                { value: 1, label: "Kadry", trigger: "4" },
                { value: 2, label: "Płace", trigger: "5" },
                { value: 3, label: "Magazyn", trigger: "6" },
                { value: 4, label: "Faktury", trigger: "7" },
            ]
        },
        {
            id: "4",
            message: "Moduł Kadry służy do kompleksowego zarządzania danymi pracowników apteki.",
            trigger: "8"
        },
        {
            id: "5",
            message: "Moduł płace umożliwia efektywne i precyzyjne przetwarzanie wynagrodzeń pracowników",
            trigger: "12"
        },
        {
            id: "6",
            message: "Moduł magazyn umożliwia zarządzanie stanami magazynowymi",
            trigger: "16"
        },
        {
            id: "7",
            message: "Moduł faktury usprawnia proces wystawiania oraz zarządzania fakturami",
            trigger: "20"
        },
        {
            id: "8",
            message: "Poznaj funkcje modułu kadrowego:",
            trigger: "9"
        },
        {
            id: "9",
            options: [
                { value: 1, label: "Dodawanie pracowników", trigger: "10" },
                { value: 2, label: "Lista pracowników", trigger: "11" },
            ]
        },
        {
            id: "10",
            component: (
                <BotRedirect
                    message="Kliknij aby przenieść"
                    url="/pracownik"
                />
            ),
            trigger: "2"


        },
        {
            id: "11",
            component: (
                <BotRedirect
                    message="Kliknij aby przenieść"
                    url="/wszyscy"
                />
            ),

            trigger: "2"


        },
        {
            id: "12",
            message: "Poznaj funkcje modułu płacowego:",
            trigger: "13"
        },
        {
            id: "13",
            options: [
                { value: 1, label: "Oblicz płacę", trigger: "14" },
                { value: 2, label: "Lista płac", trigger: "15" },
            ]
        },
        {
            id: "14",
            component: (
                <BotRedirect
                    message="Kliknij aby przenieść"
                    url="/placa"
                />
            ),

            trigger: "2"

        },
        {
            id: "15",
            component: (
                <BotRedirect
                    message="Kliknij aby przenieść"
                    url="/wszyscyplaca"
                />
            ),

            trigger: "2"

        },
        {
            id: "16",
            message: "Poznaj funkcje modułu magazynowego:",
            trigger: "17"
        },
        {
            id: "17",
            options: [
                { value: 1, label: "Dodaj towar", trigger: "18" },
                { value: 2, label: "Stan magazynowy", trigger: "19" },
            ]
        },
        {
            id: "18",
            component: (
                <BotRedirect
                    message="Kliknij aby przenieść"
                    url="/towar"
                />
            ),

            trigger: "2"

        },
        {
            id: "19",
            component: (
                <BotRedirect
                    message="Kliknij aby przenieść"
                    url="/towary"
                />
            ),

            trigger: "2"

        },
        {
            id: "20",
            message: "Poznaj funkcje modułu faktur:",
            trigger: "21"
        },
        {
            id: "21",
            options: [
                { value: 1, label: "Dodaj fakturę", trigger: "22" },
                { value: 2, label: "Lista faktur", trigger: "23" },
            ]
        },
        {
            id: "22",
            component: (
                <BotRedirect
                    message="Kliknij aby przenieść"
                    url="/towar"
                />
            ),

            trigger: "2"

        },
        {
            id: "23",
            component: (
                <BotRedirect
                    message="Kliknij aby przenieść"
                    url="/towary"
                />
            ),

            trigger: "2"

        },



        ]

    return (
        <>
            <ThemeProvider theme={CHATBOT_THEME}>
                <ChatBot steps={steps} floating={true} headerTitle="Asystent" />
            </ThemeProvider>
        </>
    );
};


export default ChatBotHelper;



