import components from './json/options.json'

export default {
	// 注册myPop
	install(Vue) {
		// 使用闭包实现单例模式
		var OldCase; 
		// 接收name和opts，name是组件名，opts是传过去的值
		Vue.prototype.$myPop = (name, opts) => {
			// 从json表中获取所有配置参数
			let myComponents = components.components;
			// 遍历json表，寻找相应的组件
			myComponents.forEach((item) => {
				if (item.name === name) {
					// 导入组件
					let myCom = import('./' + item.componentsName + '.vue');
					myCom.then(res => {
						// 生成一个Vue的子类
						let MyTpl = Vue.extend(res.default);
						// 生成一个该子类的实例
						let NewCase = new MyTpl().$mount()
						// 如果还没有任何实例就使用新实例
						if (OldCase === undefined) {
							OldCase = NewCase;
						// 如果已经有实例，就清除旧的实例，再使用新的实例
						} else if (OldCase.$options.name !== NewCase.$options.name) {
							document.body.removeChild(OldCase.$el);
							OldCase = NewCase;
						}
						// 将此div加入全局挂载点内部
						document.body.appendChild(OldCase.$el);
						// 把传进来的参数传过去组件中
						Object.keys(opts).forEach(key => {
							OldCase[key] = opts[key];
						})
					})

				}
			})

		}
	}
}
