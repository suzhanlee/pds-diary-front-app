import { View, Text } from "react-native";
import styles from "./src/styles/globalStyles";
import WeeklyPlan from "./src/components/WeeklyPlan";
import TimePlan from "./src/components/TimePlan";
import DaySee from "./src/components/DaySee";
import TimeDo from "./src/components/TimeDo";

const App = () => {
    return (
        <View style={styles.container}>
            <WeeklyPlan></WeeklyPlan>
            <View style={styles.day_plan_container}>
                <View style={styles.time_container}>
                    <TimePlan></TimePlan>
                    <TimeDo></TimeDo>
                </View>
                <DaySee></DaySee>
            </View>
        </View>
    );
};

export default App;
