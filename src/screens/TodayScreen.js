import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";

const TodayScreen = () => {
  	
  	return (
    		<View style={styles.androidCompact1}>
      			<View style={[styles.navigationBarVerticalItems, styles.stateLayer2FlexBox]}>
        				<View style={[styles.navItem01, styles.navItem01SpaceBlock]}>
          					<View style={[styles.iconContainer, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer, styles.stateLayout]}>
              							<Image style={[styles.icon, styles.iconLayout1]} resizeMode="cover" />
              							<Image style={styles.iconLayout} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={styles.labelText}>Сегодня</Text>
        				</View>
        				<View style={[styles.navItem01, styles.navItem01SpaceBlock]}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateLayout]}>
              							<View style={[styles.icon3, styles.iconLayout]} />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={styles.labelText2}>Задачи</Text>
        				</View>
        				<View style={[styles.navItem01, styles.navItem01SpaceBlock]}>
          					<Image style={[styles.iconContainer3, styles.stateLayout]} resizeMode="cover" />
          					<Text style={styles.labelText2}>Помощник</Text>
        				</View>
        				<View style={[styles.navItem01, styles.navItem01SpaceBlock]}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateLayout]}>
              							<Image style={[styles.icon5, styles.iconLayout]} resizeMode="cover" />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={styles.labelText2}>Аналитика</Text>
        				</View>
        				<View style={[styles.navItem01, styles.navItem01SpaceBlock]}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateLayout]}>
              							<Image style={[styles.icon5, styles.iconLayout]} resizeMode="cover" />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={styles.labelText2}>Настройки</Text>
        				</View>
      			</View>
      			<Image style={styles.androidCompact1Child} resizeMode="cover" />
      			<Text style={[styles.text, styles.textLayout]}>Доброе утро!</Text>
      			<Text style={[styles.text2, styles.textTypo1]}>Понедельник, 15 апреля</Text>
      			<Text style={[styles.text3, styles.textTypo1]}>ФОКУС ДНЯ</Text>
      			<Text style={styles.text4}>Подготовить перезнтацию для клиента</Text>
      			<Text style={styles.text5}>10:00 - 11:30</Text>
      			<View style={[styles.rectangleParent, styles.groupChildLayout]}>
        				<View style={[styles.groupChild, styles.groupChildLayout]} />
        				<Text style={styles.text6}>Начать</Text>
      			</View>
      			<Text style={styles.text7}>Расписание</Text>
      			<View style={styles.androidCompact1Item} />
      			<Text style={[styles.text8, styles.textTypo]}>9:00</Text>
      			<Text style={[styles.text9, styles.textTypo]}>14:00</Text>
      			<Text style={[styles.text10, styles.textTypo]}>13:00</Text>
      			<Text style={[styles.text11, styles.textTypo]}>10:00</Text>
      			<Text style={[styles.text12, styles.textTypo]}>11:00</Text>
      			<Text style={[styles.text13, styles.textTypo]}>12:00</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	stateLayer2FlexBox: {
    		justifyContent: "center",
    		flexDirection: "row"
  	},
  	navItem01SpaceBlock: {
    		paddingHorizontal: 0,
    		alignItems: "center"
  	},
  	iconContainerFlexBox: {
    		alignItems: "center",
    		justifyContent: "center"
  	},
  	stateLayout: {
    		width: 56,
    		height: 32
  	},
  	iconLayout1: {
    		zIndex: 0,
    		width: 24,
    		height: 24
  	},
  	iconLayout: {
    		zIndex: 1,
    		width: 24,
    		height: 24
  	},
  	textLayout: {
    		height: 45,
    		display: "flex",
    		alignItems: "center",
    		justifyContent: "center",
    		width: 412
  	},
  	textTypo1: {
    		color: "#475569",
    		fontSize: 16,
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		textAlign: "center",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	groupChildLayout: {
    		height: 53,
    		width: 349,
    		position: "absolute"
  	},
  	textTypo: {
    		width: 89,
    		left: 26,
    		fontFamily: "Inter-Regular",
    		fontSize: 16,
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		color: "#94a3b8",
    		textAlign: "center",
    		position: "absolute"
  	},
  	androidCompact1: {
    		width: "100%",
    		height: 917,
    		backgroundColor: "#fff",
    		overflow: "hidden"
  	},
  	navigationBarVerticalItems: {
    		top: 827,
    		backgroundColor: "#f3edf7",
    		alignItems: "flex-end",
    		width: 412,
    		justifyContent: "center",
    		left: 0,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	navItem01: {
    		flex: 1,
    		paddingVertical: 6,
    		gap: 4,
    		alignSelf: "stretch",
    		paddingHorizontal: 0
  	},
  	iconContainer: {
    		backgroundColor: "rgba(255, 255, 255, 0)",
    		borderRadius: 16,
    		overflow: "hidden"
  	},
  	stateLayer: {
    		height: 32,
    		alignItems: "center",
    		justifyContent: "center",
    		flexDirection: "row"
  	},
  	icon: {
    		opacity: 0,
    		left: "50%",
    		top: "50%",
    		marginLeft: -12,
    		marginTop: -12,
    		position: "absolute"
  	},
  	labelText: {
    		textAlign: "center",
    		color: "#6366f1",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 16,
    		letterSpacing: 0.5,
    		fontSize: 12,
    		alignSelf: "stretch"
  	},
  	iconContainer2: {
    		borderRadius: 16,
    		flexDirection: "row",
    		alignItems: "center",
    		overflow: "hidden"
  	},
  	stateLayer2: {
    		paddingVertical: 4,
    		gap: 10,
    		height: 32,
    		paddingHorizontal: 0,
    		alignItems: "center",
    		justifyContent: "center",
    		flexDirection: "row"
  	},
  	icon3: {
    		opacity: 0,
    		left: "50%",
    		top: "50%",
    		marginLeft: -12,
    		marginTop: -12,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	labelText2: {
    		color: "#94a3b8",
    		textAlign: "center",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 16,
    		letterSpacing: 0.5,
    		fontSize: 12,
    		alignSelf: "stretch"
  	},
  	iconContainer3: {
    		height: 32,
    		borderRadius: 16
  	},
  	icon5: {
    		opacity: 0,
    		left: "50%",
    		top: "50%",
    		marginLeft: -12,
    		marginTop: -12,
    		position: "absolute"
  	},
  	androidCompact1Child: {
    		top: 175,
    		left: 6,
    		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    		borderRadius: 12,
    		width: 399,
    		height: 194,
    		position: "absolute"
  	},
  	text: {
    		marginLeft: -206,
    		top: 74,
    		fontSize: 24,
    		color: "#000",
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		height: 45,
    		display: "flex",
    		textAlign: "center",
    		fontWeight: "500",
    		left: "50%",
    		position: "absolute"
  	},
  	text2: {
    		top: 105,
    		left: 1,
    		height: 45,
    		display: "flex",
    		alignItems: "center",
    		justifyContent: "center",
    		width: 412
  	},
  	text3: {
    		top: 199,
    		left: 67,
    		width: 278,
    		height: 30
  	},
  	text4: {
    		top: 229,
    		left: 30,
    		fontWeight: "600",
    		fontFamily: "Inter-SemiBold",
    		width: 352,
    		height: 31,
    		textAlign: "left",
    		color: "#0f172a",
    		fontSize: 16,
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		position: "absolute"
  	},
  	text5: {
    		top: 260,
    		left: 41,
    		width: 168,
    		fontFamily: "Inter-Regular",
    		textAlign: "left",
    		fontSize: 16,
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		color: "#6366f1",
    		height: 24,
    		position: "absolute"
  	},
  	rectangleParent: {
    		top: 297,
    		left: 31
  	},
  	groupChild: {
    		top: 0,
    		borderRadius: 8,
    		backgroundColor: "#6366f1",
    		left: 0,
    		width: 349
  	},
  	text6: {
    		top: 17,
    		left: 143,
    		color: "#fff",
    		width: 64,
    		fontSize: 16,
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		textAlign: "center",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	text7: {
    		top: 425,
    		left: -31,
    		fontWeight: "700",
    		fontFamily: "Inter-Bold",
    		width: 210,
    		color: "#0f172a",
    		fontSize: 16,
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		textAlign: "center",
    		height: 32,
    		position: "absolute"
  	},
  	androidCompact1Item: {
    		top: 463,
    		left: 21,
    		borderStyle: "solid",
    		borderColor: "#e2e8f0",
    		borderRightWidth: 2,
    		width: 2,
    		height: 302,
    		position: "absolute"
  	},
  	text8: {
    		top: 464,
    		height: 30
  	},
  	text9: {
    		top: 734,
    		height: 30
  	},
  	text10: {
    		top: 679,
    		height: 32
  	},
  	text11: {
    		top: 517,
    		height: 32
  	},
  	text12: {
    		top: 572,
    		height: 30
  	},
  	text13: {
    		top: 626,
    		height: 30
  	}
});

export default TodayScreen;
