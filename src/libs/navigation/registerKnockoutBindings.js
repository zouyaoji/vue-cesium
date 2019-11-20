import KnockoutMarkdownBinding from './KnockoutMarkdownBinding'
import KnockoutHammerBinding from './KnockoutHammerBinding'
var registerKnockoutBindings = () => {
  Cesium.SvgPathBindingHandler.register(Cesium.knockout)
  KnockoutMarkdownBinding.register(Cesium.knockout)
  KnockoutHammerBinding.register(Cesium.knockout)

  Cesium.knockout.bindingHandlers.embeddedComponent = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
      var component = Cesium.knockout.unwrap(valueAccessor())
      component.show(element)
      return { controlsDescendantBindings: true }
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) { }
  }
}

export default registerKnockoutBindings
