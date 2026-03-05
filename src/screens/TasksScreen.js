import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";

const TasksScreen = () => {
  	
  	return (
    		<View style={styles.androidCompact3}>
      			<View style={styles.navigationBarVerticalItems}>
        				<View style={[styles.navItem01, styles.navItem01SpaceBlock]}>
          					<View style={[styles.iconContainer, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer, styles.parentFlexBox]}>
              							<Image style={[styles.icon, styles.iconPosition]} resizeMode="cover" />
              							<Image style={[styles.icon2, styles.iconLayout]} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText, styles.labelTypo]}>Сегодня</Text>
        				</View>
        				<View style={[styles.navItem01, styles.navItem01SpaceBlock]}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.navItem01SpaceBlock]}>
              							<View style={[styles.icon3, styles.iconPosition]} />
              							<Image style={[styles.icon4, styles.iconLayout]} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText2, styles.labelTypo]}>Задачи</Text>
        				</View>
        				<View style={[styles.navItem01, styles.navItem01SpaceBlock]}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.navItem01SpaceBlock]}>
              							<Image style={[styles.icon5, styles.iconPosition]} resizeMode="cover" />
              							<Image style={[styles.icon4, styles.iconLayout]} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText, styles.labelTypo]}>Помощник</Text>
        				</View>
        				<View style={[styles.navItem01, styles.navItem01SpaceBlock]}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.navItem01SpaceBlock]}>
              							<Image style={[styles.icon5, styles.iconPosition]} resizeMode="cover" />
              							<Image style={[styles.icon4, styles.iconLayout]} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText, styles.labelTypo]}>Аналитика</Text>
        				</View>
        				<View style={[styles.navItem01, styles.navItem01SpaceBlock]}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.navItem01SpaceBlock]}>
              							<Image style={[styles.icon5, styles.iconPosition]} resizeMode="cover" />
              							<Image style={[styles.icon4, styles.iconLayout]} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText, styles.labelTypo]}>Настройки</Text>
        				</View>
      			</View>
      			<Text style={styles.text}>Задачи</Text>
      			<View style={styles.androidCompact3Child} />
      			<Text style={[styles.text2, styles.textTypo6]}>Поиск задачи</Text>
      			<View style={[styles.roundedRectangleParent, styles.parentFlexBox]}>
        				<View style={[styles.roundedRectangle, styles.roundedLayout]} />
        				<View style={[styles.roundedRectangle2, styles.roundedLayout]} />
        				<View style={[styles.roundedRectangle3, styles.roundedLayout]} />
        				<View style={[styles.roundedRectangle4, styles.roundedLayout]} />
        				<Text style={[styles.text3, styles.textTypo5]}>Все</Text>
        				<Text style={[styles.text4, styles.textTypo5]}>Работа</Text>
        				<Text style={[styles.text5, styles.textTypo5]}>Личное</Text>
        				<Text style={[styles.text6, styles.textTypo5]}>Важное</Text>
      			</View>
      			<Image style={styles.androidCompact3Item} resizeMode="cover" />
      			<View style={[styles.parent, styles.parentFlexBox]}>
        				<Text style={[styles.text7, styles.textTypo5]}>П</Text>
        				<Text style={[styles.text7, styles.textTypo5]}>В</Text>
        				<Text style={[styles.text7, styles.textTypo5]}>С</Text>
        				<Text style={[styles.text7, styles.textTypo5]}>Ч</Text>
        				<Text style={[styles.text7, styles.textTypo5]}>П</Text>
        				<Text style={[styles.text7, styles.textTypo5]}>С</Text>
        				<Text style={[styles.text7, styles.textTypo5]}>В</Text>
      			</View>
      			<Text style={[styles.text14, styles.textTypo4]}>1</Text>
      			<Text style={[styles.text15, styles.textTypo4]}>2</Text>
      			<Text style={[styles.text16, styles.textTypo4]}>3</Text>
      			<Text style={[styles.text17, styles.textTypo4]}>4</Text>
      			<Text style={[styles.text18, styles.textTypo4]}>5</Text>
      			<Text style={[styles.text19, styles.textTypo4]}>6</Text>
      			<Text style={[styles.text20, styles.textTypo4]}>7</Text>
      			<Text style={[styles.text21, styles.textTypo3]}>29</Text>
      			<Text style={[styles.text22, styles.textTypo3]}>30</Text>
      			<Text style={[styles.text23, styles.textTypo2]}>15</Text>
      			<Text style={[styles.text24, styles.textTypo2]}>16</Text>
      			<Text style={[styles.text25, styles.textTypo2]}>17</Text>
      			<Text style={[styles.text26, styles.textTypo2]}>18</Text>
      			<Text style={[styles.text27, styles.textTypo2]}>20</Text>
      			<Text style={[styles.text28, styles.textTypo2]}>21</Text>
      			<Text style={[styles.text29, styles.textTypo1]}>22</Text>
      			<Text style={[styles.text30, styles.textTypo1]}>23</Text>
      			<Text style={[styles.text31, styles.textTypo1]}>24</Text>
      			<Text style={[styles.text32, styles.textTypo1]}>25</Text>
      			<Text style={[styles.text33, styles.textTypo1]}>26</Text>
      			<Text style={[styles.text34, styles.textTypo1]}>27</Text>
      			<Text style={[styles.text35, styles.textTypo1]}>28</Text>
      			<Text style={[styles.text36, styles.textTypo]}>8</Text>
      			<Text style={[styles.text37, styles.textTypo]}>9</Text>
      			<Text style={[styles.text38, styles.textTypo]}>10</Text>
      			<Text style={[styles.text39, styles.textTypo]}>11</Text>
      			<Text style={[styles.text40, styles.textTypo]}>12</Text>
      			<Text style={[styles.text41, styles.textTypo]}>13</Text>
      			<Text style={[styles.text42, styles.textTypo]}>14</Text>
      			<Image style={styles.androidCompact3Inner} resizeMode="cover" />
      			<Text style={[styles.text43, styles.textTypo2]}>19</Text>
      			<Text style={[styles.text44, styles.textTypo6]}>Задачи на 19 апреля (3)</Text>
      			<View style={[styles.rectangleParent, styles.groupChildLayout]}>
        				<View style={[styles.groupChild, styles.groupChildLayout]} />
        				<Text style={styles.text45}>Добавить задачу</Text>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	navItem01SpaceBlock: {
    		paddingHorizontal: 0,
    		alignItems: "center"
  	},
  	iconContainerFlexBox: {
    		borderRadius: 16,
    		alignItems: "center",
    		justifyContent: "center",
    		overflow: "hidden"
  	},
  	parentFlexBox: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	iconPosition: {
    		opacity: 0,
    		left: "50%",
    		top: "50%",
    		marginLeft: -12,
    		marginTop: -12,
    		width: 24,
    		height: 24,
    		position: "absolute"
  	},
  	iconLayout: {
    		width: 24,
    		height: 24
  	},
  	labelTypo: {
    		textAlign: "center",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 16,
    		letterSpacing: 0.5,
    		fontSize: 12,
    		alignSelf: "stretch"
  	},
  	textTypo6: {
    		letterSpacing: 1,
    		fontSize: 16,
    		lineHeight: 20,
    		textAlign: "center",
    		position: "absolute"
  	},
  	roundedLayout: {
    		height: 27,
    		backgroundColor: "#6366f1",
    		borderRadius: 16
  	},
  	textTypo5: {
    		fontSize: 14,
    		letterSpacing: 1,
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		textAlign: "center",
    		fontWeight: "500"
  	},
  	textTypo4: {
    		height: 17,
    		top: 274,
    		width: 20,
    		color: "#0f172a",
    		fontSize: 14,
    		letterSpacing: 1,
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		textAlign: "center",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	textTypo3: {
    		top: 382,
    		height: 17,
    		width: 20,
    		color: "#0f172a",
    		fontSize: 14,
    		letterSpacing: 1,
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		textAlign: "center",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	textTypo2: {
    		top: 328,
    		height: 17,
    		fontSize: 14,
    		letterSpacing: 1,
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		textAlign: "center",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	textTypo1: {
    		top: 355,
    		height: 17,
    		width: 20,
    		color: "#0f172a",
    		fontSize: 14,
    		letterSpacing: 1,
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		textAlign: "center",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	textTypo: {
    		top: 301,
    		height: 17,
    		width: 20,
    		color: "#0f172a",
    		fontSize: 14,
    		letterSpacing: 1,
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		textAlign: "center",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	groupChildLayout: {
    		height: 53,
    		width: 349,
    		position: "absolute"
  	},
  	androidCompact3: {
    		width: "100%",
    		height: 917,
    		backgroundColor: "#fff",
    		overflow: "hidden"
  	},
  	navigationBarVerticalItems: {
    		top: 827,
    		backgroundColor: "#f3edf7",
    		width: 412,
    		alignItems: "flex-end",
    		justifyContent: "center",
    		flexDirection: "row",
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
    		backgroundColor: "rgba(255, 255, 255, 0)"
  	},
  	stateLayer: {
    		height: 32,
    		width: 56,
    		justifyContent: "center"
  	},
  	icon: {
    		zIndex: 0
  	},
  	icon2: {
    		zIndex: 1
  	},
  	labelText: {
    		color: "#94a3b8"
  	},
  	iconContainer2: {
    		flexDirection: "row"
  	},
  	stateLayer2: {
    		paddingVertical: 4,
    		gap: 10,
    		height: 32,
    		width: 56,
    		justifyContent: "center",
    		flexDirection: "row"
  	},
  	icon3: {
    		zIndex: 1,
    		overflow: "hidden"
  	},
  	icon4: {
    		zIndex: 0
  	},
  	labelText2: {
    		color: "#6366f1"
  	},
  	icon5: {
    		zIndex: 1
  	},
  	text: {
    		top: 63,
    		left: 68,
    		fontSize: 24,
    		display: "flex",
    		width: 277,
    		color: "#000",
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		textAlign: "center",
    		fontWeight: "500",
    		height: 32,
    		alignItems: "center",
    		justifyContent: "center",
    		position: "absolute"
  	},
  	androidCompact3Child: {
    		top: 109,
    		left: 22,
    		borderRadius: 20,
    		backgroundColor: "#f1f5f9",
    		width: 367,
    		height: 43,
    		position: "absolute"
  	},
  	text2: {
    		top: 120,
    		fontFamily: "Inter-Regular",
    		width: 124,
    		height: 11,
    		left: 39,
    		color: "#94a3b8"
  	},
  	roundedRectangleParent: {
    		top: 171,
    		left: 30,
    		gap: 8,
    		position: "absolute"
  	},
  	roundedRectangle: {
    		backgroundColor: "#6366f1",
    		zIndex: 0,
    		width: 56
  	},
  	roundedRectangle2: {
    		width: 85,
    		backgroundColor: "#6366f1",
    		zIndex: 1
  	},
  	roundedRectangle3: {
    		width: 74,
    		zIndex: 2,
    		backgroundColor: "#6366f1"
  	},
  	roundedRectangle4: {
    		width: 86,
    		zIndex: 3,
    		backgroundColor: "#6366f1"
  	},
  	text3: {
    		width: 28,
    		left: 14,
    		zIndex: 4,
    		color: "#fff",
    		top: 4,
    		height: 20,
    		fontSize: 14,
    		position: "absolute"
  	},
  	text4: {
    		width: 54,
    		left: 81,
    		zIndex: 5,
    		color: "#fff",
    		top: 4,
    		height: 20,
    		fontSize: 14,
    		position: "absolute"
  	},
  	text5: {
    		width: 57,
    		left: 168,
    		zIndex: 6,
    		color: "#fff",
    		top: 4,
    		height: 20,
    		fontSize: 14,
    		position: "absolute"
  	},
  	text6: {
    		width: 59,
    		left: 255,
    		zIndex: 7,
    		color: "#fff",
    		top: 4,
    		height: 20,
    		fontSize: 14,
    		position: "absolute"
  	},
  	androidCompact3Item: {
    		top: 231,
    		left: 25,
    		borderRadius: 12,
    		width: 364,
    		height: 180,
    		position: "absolute"
  	},
  	parent: {
    		top: 244,
    		width: 337,
    		justifyContent: "space-between",
    		gap: 20,
    		left: 39,
    		position: "absolute"
  	},
  	text7: {
    		color: "#94a3b8"
  	},
  	text14: {
    		left: 35
  	},
  	text15: {
    		left: 89
  	},
  	text16: {
    		left: 143
  	},
  	text17: {
    		left: 197
  	},
  	text18: {
    		left: 251
  	},
  	text19: {
    		left: 307
  	},
  	text20: {
    		left: 361
  	},
  	text21: {
    		left: 35
  	},
  	text22: {
    		left: 89
  	},
  	text23: {
    		width: 20,
    		color: "#0f172a",
    		top: 328,
    		left: 35
  	},
  	text24: {
    		left: 89,
    		width: 20,
    		color: "#0f172a",
    		top: 328
  	},
  	text25: {
    		left: 143,
    		width: 20,
    		color: "#0f172a",
    		top: 328
  	},
  	text26: {
    		left: 197,
    		width: 20,
    		color: "#0f172a",
    		top: 328
  	},
  	text27: {
    		left: 307,
    		width: 20,
    		color: "#0f172a",
    		top: 328
  	},
  	text28: {
    		left: 361,
    		width: 20,
    		color: "#0f172a",
    		top: 328
  	},
  	text29: {
    		left: 35
  	},
  	text30: {
    		left: 89
  	},
  	text31: {
    		left: 143
  	},
  	text32: {
    		left: 197
  	},
  	text33: {
    		left: 251
  	},
  	text34: {
    		left: 307
  	},
  	text35: {
    		left: 361
  	},
  	text36: {
    		left: 35
  	},
  	text37: {
    		left: 89
  	},
  	text38: {
    		left: 143
  	},
  	text39: {
    		left: 197
  	},
  	text40: {
    		left: 251
  	},
  	text41: {
    		left: 307
  	},
  	text42: {
    		left: 361
  	},
  	androidCompact3Inner: {
    		top: 321,
    		left: 246,
    		width: 32,
    		height: 32,
    		position: "absolute"
  	},
  	text43: {
    		width: 22,
    		left: 251,
    		color: "#fff"
  	},
  	text44: {
    		top: 426,
    		left: 27,
    		fontWeight: "700",
    		fontFamily: "Inter-Bold",
    		width: 223,
    		height: 19,
    		color: "#000"
  	},
  	rectangleParent: {
    		top: 739,
    		left: 33
  	},
  	groupChild: {
    		top: 0,
    		borderRadius: 8,
    		backgroundColor: "#6366f1",
    		left: 0
  	},
  	text45: {
    		top: 17,
    		left: 96,
    		width: 154,
    		color: "#fff",
    		fontSize: 16,
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		textAlign: "center",
    		fontWeight: "500",
    		position: "absolute"
  	}
});

export default TasksScreen;
