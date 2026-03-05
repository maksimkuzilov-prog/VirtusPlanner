import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";

const AnalyticsScreen = () => {
  	
  	return (
    		<View style={styles.androidCompact5}>
      			<View style={styles.navigationBarVerticalItems}>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer, styles.iconContainerFlexBox]}>
            						<View style={styles.stateFlexBox}>
              							<Image style={[styles.icon, styles.iconLayout1]} resizeMode="cover" />
              							<Image style={styles.iconLayout} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={styles.labelText}>Сегодня</Text>
        				</View>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateFlexBox]}>
              							<View style={[styles.icon3, styles.iconLayout]} />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={styles.labelText}>Задачи</Text>
        				</View>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateFlexBox]}>
              							<Image style={[styles.icon5, styles.iconLayout]} resizeMode="cover" />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={styles.labelText}>Помощник</Text>
        				</View>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateFlexBox]}>
              							<Image style={[styles.icon5, styles.iconLayout]} resizeMode="cover" />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={styles.labelText4}>Аналитика</Text>
        				</View>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateFlexBox]}>
              							<Image style={[styles.icon5, styles.iconLayout]} resizeMode="cover" />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={styles.labelText}>Настройки</Text>
        				</View>
      			</View>
      			<Text style={styles.text}>Аналитика</Text>
      			<View style={[styles.rectangleParent, styles.groupChildLayout]}>
        				<View style={[styles.groupChild, styles.groupPosition]} />
        				<Text style={[styles.text2, styles.textTypo4]}>Неделя</Text>
      			</View>
      			<View style={[styles.rectangleGroup, styles.groupLayout]}>
        				<View style={[styles.groupItem, styles.groupLayout]} />
        				<Text style={[styles.text3, styles.textTypo4]}>День</Text>
      			</View>
      			<View style={[styles.rectangleContainer, styles.groupLayout]}>
        				<View style={[styles.groupItem, styles.groupLayout]} />
        				<Text style={[styles.text4, styles.textTypo4]}>Месяц</Text>
      			</View>
      			<View style={[styles.groupView, styles.groupLayout]}>
        				<View style={[styles.groupItem, styles.groupLayout]} />
        				<Text style={[styles.text5, styles.textTypo4]}>Год</Text>
      			</View>
      			<Text style={[styles.text6, styles.textTypo3]}>Общая продуктивность</Text>
      			<View style={[styles.androidCompact5Child, styles.androidLayout]} />
      			<View style={[styles.androidCompact5Item, styles.androidLayout]} />
      			<Text style={[styles.text7, styles.textTypo2]}>78%</Text>
      			<Text style={[styles.text8, styles.textTypo2]}>Распределение времени</Text>
      			<Text style={[styles.text9, styles.textTypo1]}>Работа</Text>
      			<View style={[styles.androidCompact5Inner, styles.androidPosition]} />
      			<View style={[styles.androidCompact5Child2, styles.androidPosition]} />
      			<Text style={[styles.text10, styles.textTypo]}>42%</Text>
      			<Text style={[styles.text11, styles.textTypo1]}>Личное</Text>
      			<View style={[styles.androidCompact5Child3, styles.androidChildPosition3]} />
      			<View style={[styles.androidCompact5Child4, styles.androidChildPosition3]} />
      			<Text style={[styles.text12, styles.textTypo]}>28%</Text>
      			<Text style={[styles.text13, styles.textTypo1]}>Обучение</Text>
      			<View style={[styles.androidCompact5Child5, styles.androidChildPosition2]} />
      			<View style={[styles.androidCompact5Child6, styles.androidChildPosition2]} />
      			<Text style={[styles.text14, styles.textTypo]}>15%</Text>
      			<Text style={[styles.text15, styles.textTypo1]}>Отдых</Text>
      			<View style={[styles.androidCompact5Child7, styles.androidChildPosition1]} />
      			<View style={[styles.androidCompact5Child8, styles.androidChildPosition1]} />
      			<Text style={[styles.text16, styles.textTypo]}>8%</Text>
      			<Text style={[styles.text17, styles.textPosition]}>Другое</Text>
      			<View style={[styles.androidCompact5Child9, styles.androidChildPosition]} />
      			<View style={[styles.androidCompact5Child10, styles.androidChildPosition]} />
      			<Text style={[styles.text18, styles.textTypo]}>4%</Text>
      			<Text style={[styles.text19, styles.textTypo3]}>Инсайты</Text>
      			<View style={styles.androidCompact5Child11} />
      			<Text style={[styles.text20, styles.textTypo4]}>Пик продуктивности</Text>
      			<Text style={[styles.text21, styles.textPosition]}>Вт, 10:00-12:00</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	iconContainerFlexBox: {
    		borderRadius: 16,
    		alignItems: "center",
    		justifyContent: "center",
    		overflow: "hidden"
  	},
  	iconLayout1: {
    		zIndex: 0,
    		width: 24,
    		height: 24
  	},
  	stateFlexBox: {
    		height: 32,
    		width: 56,
    		alignItems: "center",
    		justifyContent: "center",
    		flexDirection: "row"
  	},
  	iconLayout: {
    		zIndex: 1,
    		width: 24,
    		height: 24
  	},
  	groupChildLayout: {
    		height: 37,
    		width: 82,
    		position: "absolute"
  	},
  	groupPosition: {
    		backgroundColor: "#f1f5f9",
    		borderRadius: 20,
    		top: 0,
    		left: 0
  	},
  	textTypo4: {
    		fontSize: 14,
    		lineHeight: 20,
    		letterSpacing: 1,
    		textAlign: "center",
    		position: "absolute"
  	},
  	groupLayout: {
    		width: 62,
    		height: 37,
    		position: "absolute"
  	},
  	textTypo3: {
    		fontSize: 16,
    		color: "#0f172a",
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		letterSpacing: 1,
    		textAlign: "center",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	androidLayout: {
    		height: 46,
    		borderRadius: 6,
    		top: 228,
    		position: "absolute"
  	},
  	textTypo2: {
    		height: 19,
    		fontSize: 16,
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		letterSpacing: 1,
    		textAlign: "center",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	textTypo1: {
    		height: 18,
    		color: "#0f172a",
    		fontFamily: "Inter-Medium",
    		fontWeight: "500"
  	},
  	androidPosition: {
    		height: 29,
    		borderRadius: 4,
    		top: 377,
    		left: 26,
    		position: "absolute"
  	},
  	textTypo: {
    		width: 76,
    		height: 19,
    		color: "#000",
    		fontSize: 14,
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		letterSpacing: 1,
    		textAlign: "center",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	androidChildPosition3: {
    		top: 443,
    		height: 29,
    		borderRadius: 4,
    		left: 26,
    		position: "absolute"
  	},
  	androidChildPosition2: {
    		top: 510,
    		height: 29,
    		borderRadius: 4,
    		position: "absolute"
  	},
  	androidChildPosition1: {
    		top: 575,
    		height: 29,
    		borderRadius: 4,
    		left: 26,
    		position: "absolute"
  	},
  	textPosition: {
    		left: 25,
    		fontSize: 14,
    		lineHeight: 20,
    		letterSpacing: 1,
    		textAlign: "center",
    		position: "absolute"
  	},
  	androidChildPosition: {
    		top: 642,
    		height: 29,
    		borderRadius: 4,
    		left: 26,
    		position: "absolute"
  	},
  	androidCompact5: {
    		width: "100%",
    		height: 917,
    		backgroundColor: "#fff",
    		overflow: "hidden"
  	},
  	navigationBarVerticalItems: {
    		top: 818,
    		backgroundColor: "#f3edf7",
    		width: 412,
    		alignItems: "flex-end",
    		justifyContent: "center",
    		left: 0,
    		flexDirection: "row",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	navItem01: {
    		flex: 1,
    		paddingVertical: 6,
    		gap: 4,
    		paddingHorizontal: 0,
    		alignItems: "center",
    		alignSelf: "stretch"
  	},
  	iconContainer: {
    		backgroundColor: "rgba(255, 255, 255, 0)"
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
    		color: "#94a3b8",
    		textAlign: "center",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 16,
    		letterSpacing: 0.5,
    		fontSize: 12,
    		alignSelf: "stretch"
  	},
  	iconContainer2: {
    		flexDirection: "row",
    		borderRadius: 16
  	},
  	stateLayer2: {
    		paddingVertical: 4,
    		gap: 10,
    		paddingHorizontal: 0
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
  	icon5: {
    		opacity: 0,
    		left: "50%",
    		top: "50%",
    		marginLeft: -12,
    		marginTop: -12,
    		position: "absolute"
  	},
  	labelText4: {
    		color: "#6366f1",
    		textAlign: "center",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 16,
    		letterSpacing: 0.5,
    		fontSize: 12,
    		alignSelf: "stretch"
  	},
  	text: {
    		top: 68,
    		left: 87,
    		fontSize: 24,
    		width: 238,
    		height: 49,
    		color: "#0f172a",
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		letterSpacing: 1,
    		textAlign: "center",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	rectangleParent: {
    		left: 127,
    		top: 117
  	},
  	groupChild: {
    		height: 37,
    		width: 82,
    		position: "absolute"
  	},
  	text2: {
    		width: 58,
    		height: 20,
    		left: 12,
    		fontSize: 14,
    		top: 9,
    		fontFamily: "Inter-Medium",
    		color: "#6366f1",
    		fontWeight: "500"
  	},
  	rectangleGroup: {
    		left: 50,
    		top: 117
  	},
  	groupItem: {
    		backgroundColor: "#f1f5f9",
    		borderRadius: 20,
    		top: 0,
    		left: 0
  	},
  	text3: {
    		width: 39,
    		height: 20,
    		left: 12,
    		fontSize: 14,
    		top: 9,
    		fontFamily: "Inter-Medium",
    		color: "#6366f1",
    		fontWeight: "500"
  	},
  	rectangleContainer: {
    		top: 118,
    		left: 224
  	},
  	text4: {
    		left: 6,
    		width: 50,
    		height: 20,
    		top: 9,
    		fontSize: 14,
    		fontFamily: "Inter-Medium",
    		color: "#6366f1",
    		fontWeight: "500"
  	},
  	groupView: {
    		left: 301,
    		top: 117
  	},
  	text5: {
    		width: 27,
    		left: 18,
    		height: 20,
    		top: 9,
    		fontSize: 14,
    		fontFamily: "Inter-Medium",
    		color: "#6366f1",
    		fontWeight: "500"
  	},
  	text6: {
    		top: 179,
    		width: 221,
    		left: 22,
    		height: 24,
    		fontSize: 16
  	},
  	androidCompact5Child: {
    		width: 361,
    		backgroundColor: "#e2e8f0",
    		height: 46,
    		borderRadius: 6,
    		left: 28,
    		top: 228
  	},
  	androidCompact5Item: {
    		width: 293,
    		backgroundColor: "#10b981",
    		left: 26,
    		height: 46,
    		borderRadius: 6,
    		top: 228
  	},
  	text7: {
    		top: 242,
    		left: 30,
    		color: "#000",
    		width: 56,
    		height: 19
  	},
  	text8: {
    		top: 313,
    		width: 230,
    		left: 18,
    		color: "#0f172a"
  	},
  	text9: {
    		top: 349,
    		width: 66,
    		height: 18,
    		left: 20,
    		fontSize: 14,
    		lineHeight: 20,
    		letterSpacing: 1,
    		textAlign: "center",
    		position: "absolute"
  	},
  	androidCompact5Inner: {
    		width: 275,
    		backgroundColor: "#e2e8f0"
  	},
  	androidCompact5Child2: {
    		backgroundColor: "#6366f1",
    		width: 115
  	},
  	text10: {
    		top: 382,
    		left: 15,
    		width: 76
  	},
  	text11: {
    		top: 415,
    		width: 66,
    		height: 18,
    		left: 20,
    		fontSize: 14,
    		lineHeight: 20,
    		letterSpacing: 1,
    		textAlign: "center",
    		position: "absolute"
  	},
  	androidCompact5Child3: {
    		width: 275,
    		backgroundColor: "#e2e8f0"
  	},
  	androidCompact5Child4: {
    		backgroundColor: "#8b5cf6",
    		width: 77
  	},
  	text12: {
    		top: 448,
    		left: 15,
    		width: 76
  	},
  	text13: {
    		top: 482,
    		left: 23,
    		width: 89,
    		fontSize: 14,
    		lineHeight: 20,
    		letterSpacing: 1,
    		textAlign: "center",
    		position: "absolute"
  	},
  	androidCompact5Child5: {
    		left: 29,
    		width: 275,
    		backgroundColor: "#e2e8f0"
  	},
  	androidCompact5Child6: {
    		width: 41,
    		backgroundColor: "#10b981",
    		left: 28,
    		top: 510
  	},
  	text14: {
    		top: 514,
    		left: 10
  	},
  	text15: {
    		top: 547,
    		width: 66,
    		height: 18,
    		left: 20,
    		fontSize: 14,
    		lineHeight: 20,
    		letterSpacing: 1,
    		textAlign: "center",
    		position: "absolute"
  	},
  	androidCompact5Child7: {
    		width: 275,
    		backgroundColor: "#e2e8f0"
  	},
  	androidCompact5Child8: {
    		backgroundColor: "#f89e0b",
    		width: 22
  	},
  	text16: {
    		top: 580,
    		left: 26
  	},
  	text17: {
    		top: 613,
    		height: 18,
    		color: "#0f172a",
    		fontFamily: "Inter-Medium",
    		fontWeight: "500",
    		width: 66
  	},
  	androidCompact5Child9: {
    		width: 275,
    		backgroundColor: "#e2e8f0"
  	},
  	androidCompact5Child10: {
    		backgroundColor: "#94a3b8",
    		width: 11
  	},
  	text18: {
    		top: 647,
    		left: 18
  	},
  	text19: {
    		top: 688,
    		width: 101,
    		height: 17,
    		left: 18
  	},
  	androidCompact5Child11: {
    		top: 716,
    		borderRadius: 12,
    		backgroundColor: "#f8fafc",
    		borderStyle: "solid",
    		borderColor: "#e2e8f0",
    		borderWidth: 1,
    		width: 366,
    		height: 72,
    		left: 22,
    		position: "absolute"
  	},
  	text20: {
    		top: 727,
    		left: 17,
    		fontWeight: "600",
    		fontFamily: "Inter-SemiBold",
    		width: 211,
    		height: 15,
    		color: "#0f172a"
  	},
  	text21: {
    		top: 753,
    		fontFamily: "Inter-Regular",
    		width: 150,
    		color: "#000",
    		height: 20
  	}
});

export default AnalyticsScreen;
