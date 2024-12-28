import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#faf5ff",
        height: "100%",
    },
    weekly_container: {
        flex: 1,
        padding: 10,
        textAlign: "center",
        backgroundColor: "blue",
        height: "100%",
    },
    weekly: {
        fontSize: 20,
        backgroundColor: "grey",
    },
    day_plan_container: {
        flex: 1,
        padding: 10,
        textAlign: "center",
        backgroundColor: "white",
        flexDirection: "column",
        height: "100%",
    },
    time_container: {
        flex: 1.5, // 상단 영역 크기
        minHeight: 100, // 최소 높이 설정
        backgroundColor: "lightgreen",
        padding: 10,
        marginBottom: 10, // 아래쪽 여백 추가
        flexDirection: "row",
    },
    day_container: {
        flex: 0.5, // 하단 영역 크기
        minHeight: 100, // 최소 높이 설정
        backgroundColor: "pink",
        padding: 10,
    },
    time_plan_container: {
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        marginRight: 5,
    },
    time_do_container: {
        flex: 1,
        backgroundColor: "pink",
        padding: 10,
        marginLeft: 5,
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center"
    },
    context: {
        marginBottom: 5,
        width: "88%",
    },
    hour_number: {
        backgroundColor: "grey",
        fontStyle: "bold",
        width: "12%",
        textAlign: "center"
    },
});
