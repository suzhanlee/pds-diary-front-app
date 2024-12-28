import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#faf5ff",
        height: "100%",
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
});
