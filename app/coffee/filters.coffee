# ===========================================================
# Copyright 2012 Thibaud Arnault
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# ===========================================================

app.filter 'capitalize', ->
	return (input, scope) ->
		if input
			str = ''
			arr = input.split '_'
			for i in arr
				str += i.substring(0,1).toUpperCase() + i.substring(1) + ' '
			str = str.substring 0, str.length - 1
			return str


app.filter 'startFrom', ->
    return (input, start) ->
        if input
            start = +start
            return input.slice(start)
        return []

app.filter 'fromNow', ->
  return (date) ->
    return moment(date, 'MM-DD-YYYY').fromNow()