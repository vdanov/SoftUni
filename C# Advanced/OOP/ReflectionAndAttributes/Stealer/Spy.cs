using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Stealer
{
    public class Spy
    {
        public string StealFieldInfo(string ClassName, params string[] requestedFields)
        {
            Type type = Type.GetType(ClassName);

            FieldInfo[] fields = type.GetFields( BindingFlags.NonPublic | BindingFlags.Public | BindingFlags.Static | BindingFlags.Instance);

            StringBuilder sb = new StringBuilder();

            Object classInstance = Activator.CreateInstance(type, new object[] { });

            sb.AppendLine($"Class under investigation: {ClassName}");

            foreach (FieldInfo field in fields.Where(x=> requestedFields.Contains(x.Name)))
            {
                sb.AppendLine($"{field.Name} = {field.GetValue(classInstance)}");
            }

            return sb.ToString().Trim();    
        }

        public string AnalyzeAccessModifiers(string className)
        {
            StringBuilder sb = new StringBuilder();
            Type type = Type.GetType($"Stealer.{className}");

            string fullName = type.FullName;
            FieldInfo[] classFields = type.GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.Instance);
            MethodInfo[] classPublicMethods = type.GetMethods(BindingFlags.Instance | BindingFlags.Public);
            MethodInfo[] classNonPublicMethods = type.GetMethods(BindingFlags.NonPublic | BindingFlags.Instance);

            foreach (var field in classFields)
            {
                sb.AppendLine($"{field.Name} must be private!");
            }

            foreach (var method in classNonPublicMethods.Where(x=> x.Name.StartsWith("get")))
            {
                sb.AppendLine($"{method.Name} have to be public!");
            }

            foreach (var method in classPublicMethods.Where(x=> x.Name.StartsWith("set")))
            {
                sb.AppendLine($"{method.Name} have to be private!");
            }

            return sb.ToString().Trim();
        }

        public string RevealPrivateMethods(string className)
        {
            StringBuilder sb = new StringBuilder();
            Type type = Type.GetType(className);
            MethodInfo[] privateMethods = type.GetMethods(BindingFlags.Instance | BindingFlags.NonPublic);

            sb.AppendLine($"All private methods of class {type.Name}");
            sb.AppendLine($"Base Class: {type.BaseType.Name}");
            privateMethods.ToList().ForEach(x => sb.AppendLine(x.Name));

            return sb.ToString().Trim();
        }

        public string CollectGettersAndSetters(string className)
        {
            StringBuilder sb = new StringBuilder();

            Type type = Type.GetType(className);
            MethodInfo[] methods = type.GetMethods(BindingFlags.Instance | BindingFlags.NonPublic | BindingFlags.Public);

            methods.Where(x => x.Name.StartsWith("get")).ToList().ForEach(x => sb.AppendLine($"{x.Name} will return {x.ReturnType}"));
            methods.Where(x => x.Name.StartsWith("set")).ToList().ForEach(x => sb.AppendLine($"{x.Name} will set field of {x.GetParameters().First().ParameterType}"));

            return sb.ToString().Trim();
        }
    }
}